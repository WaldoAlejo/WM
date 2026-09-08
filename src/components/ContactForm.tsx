import { useRef, useState, type FormEvent } from 'react';
import { useContent } from '../i18n/useContent';
import { isValidEmail } from '../utils/validation';
import { prepareContactEmail } from '../utils/contactEmail';
import { contactInfo } from '../data/company';
import { isPending, type Product } from '../types';
import { useLocale } from '../i18n/LocaleContext';
import { cn } from '../utils/cn';

interface ContactFormProps {
  inquiryProduct?: Product;
  /** Reasons shown in the "subject" dropdown — scoped per form (warranty / support / sales), not shared globally. */
  subjectOptions: readonly string[];
  /** Index into subjectOptions to preselect. */
  defaultSubjectIndex?: number;
  /** Remind users to attach documents in their email application. */
  showAttachments?: boolean;
  /** Show the "model and serial number" + "city" fields. Relevant when the inquiry is about a specific product a customer owns. */
  showModelAndCity?: boolean;
}

type FieldErrors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;

export function ContactForm({
  inquiryProduct,
  subjectOptions,
  defaultSubjectIndex,
  showAttachments = false,
  showModelAndCity = false,
}: ContactFormProps) {
  const content = useContent();
  const { locale } = useLocale();
  const t = content.contactPage.form;

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    city: '',
    message: '',
  });
  const [subjectIndex, setSubjectIndex] = useState(defaultSubjectIndex === undefined ? '' : String(defaultSubjectIndex));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [prepared, setPrepared] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const draftRef = useRef<HTMLTextAreaElement>(null);
  const recipient = isPending(contactInfo.email) ? '' : contactInfo.email;
  const subject = subjectIndex === '' ? '' : subjectOptions[Number(subjectIndex)] ?? '';
  const productContext = inquiryProduct
    ? `${t.productLabel}: ${inquiryProduct.name[locale]}${isPending(inquiryProduct.model) ? '' : ` (${inquiryProduct.model})`}`
    : '';
  const draft = prepareContactEmail(recipient, { ...values, subject }, t, showModelAndCity, productContext);

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setPrepared(false);
    setCopyStatus('idle');
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = t.required;
    if (!values.email.trim()) next.email = t.required;
    else if (!isValidEmail(values.email)) next.email = t.invalidEmail;
    if (!subject) next.subject = t.required;
    if (!values.message.trim()) next.message = t.required;
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    const firstInvalid = Object.keys(validationErrors)[0];
    if (firstInvalid) {
      event.currentTarget.querySelector<HTMLElement>(`#cf-${firstInvalid}`)?.focus();
      return;
    }
    setPrepared(true);
    setCopyStatus('idle');
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft.text);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
      draftRef.current?.focus();
      draftRef.current?.select();
    }
  }

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full border bg-white px-4 py-2.5 text-sm text-wm-black outline-none transition-colors focus:border-wm-black',
      hasError ? 'border-red-600' : 'border-wm-gray-300',
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {productContext && <p className="border-l-2 border-wm-wine pl-4 text-sm font-semibold">{productContext}</p>}
      <div className="border border-wm-gray-300 bg-white p-4 text-sm text-wm-gray-700">
        <p>{t.emailNotice}</p>
        {recipient && <a href={`mailto:${recipient}`} className="mt-2 inline-block font-semibold underline">{recipient}</a>}
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-wm-black">
            {t.name}
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t.namePlaceholder}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            className={inputClass(Boolean(errors.name))}
          />
          {errors.name && (
            <p id="cf-name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-wm-black">
            {t.email}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email && (
            <p id="cf-email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-wm-black">
            {t.phone} <span className="font-normal text-wm-gray-500">({t.phoneOptional})</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePlaceholder}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass(false)}
          />
        </div>

        <div>
          <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-medium text-wm-black">
            {t.subject}
          </label>
          <select
            id="cf-subject"
            name="subject"
            value={subjectIndex}
            onChange={(e) => {
              setSubjectIndex(e.target.value);
              setPrepared(false);
              setCopyStatus('idle');
            }}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'cf-subject-error' : undefined}
            className={inputClass(Boolean(errors.subject))}
          >
            <option value="" disabled>
              {t.subjectPlaceholder}
            </option>
            {subjectOptions.map((option, index) => (
              <option key={index} value={String(index)}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="cf-subject-error" className="mt-1.5 text-xs text-red-600">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      {showModelAndCity && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-model" className="mb-1.5 block text-sm font-medium text-wm-black">
              {t.model} <span className="font-normal text-wm-gray-500">({t.modelOptional})</span>
            </label>
            <input
              id="cf-model"
              name="model"
              type="text"
              placeholder={t.modelPlaceholder}
              value={values.model}
              onChange={(e) => update('model', e.target.value)}
              className={inputClass(false)}
            />
          </div>

          <div>
            <label htmlFor="cf-city" className="mb-1.5 block text-sm font-medium text-wm-black">
              {t.city} <span className="font-normal text-wm-gray-500">({t.cityOptional})</span>
            </label>
            <input
              id="cf-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder={t.cityPlaceholder}
              value={values.city}
              onChange={(e) => update('city', e.target.value)}
              className={inputClass(false)}
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-wm-black">
          {t.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder={t.messagePlaceholder}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          className={inputClass(Boolean(errors.message))}
        />
        {errors.message && (
          <p id="cf-message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {showAttachments && <p className="text-sm text-wm-gray-700">{t.attachmentsHint}</p>}

      <button
        type="submit"
        className="editorial-button"
      >
        {t.prepareEmail}
      </button>

      <div aria-live="polite">
        {prepared && <p className="text-sm text-wm-gray-700">{t.preparedNotice}</p>}
      </div>
      {prepared && (
        <section className="space-y-4 border border-wm-gray-300 bg-white p-5" aria-label={t.draftLabel}>
          <p className="text-sm text-wm-gray-700">{t.emailFallback}</p>
          <div className="flex flex-wrap gap-3">
            {recipient && (
              <a
                href={draft.href}
                className="editorial-button"
              >
                {t.openEmail}
              </a>
            )}
            <button type="button" onClick={copyDraft} className="editorial-button editorial-button-secondary">
              {t.copyEmail}
            </button>
          </div>
          <label htmlFor="cf-draft" className="block text-sm font-medium">{t.draftLabel}</label>
          <textarea ref={draftRef} id="cf-draft" value={draft.text} readOnly rows={10} className={inputClass(false)} />
          <p role="status" className="text-sm text-wm-gray-700">
            {copyStatus === 'copied' ? t.copiedNotice : copyStatus === 'error' ? t.copyError : ''}
          </p>
        </section>
      )}
    </form>
  );
}
