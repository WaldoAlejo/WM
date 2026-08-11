import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useContent } from '../i18n/useContent';
import { isValidEmail } from '../utils/validation';
import { submitContactForm } from '../utils/submitForm';
import { cn } from '../utils/cn';

interface ContactFormProps {
  /** Reasons shown in the "subject" dropdown — scoped per form (warranty / support / sales), not shared globally. */
  subjectOptions: readonly string[];
  /** Index into subjectOptions to preselect. */
  defaultSubjectIndex?: number;
  /** Show the file-attachment field. Only relevant where documents are actually expected (warranty, support). */
  showAttachments?: boolean;
  /** Show the "model and serial number" + "city" fields. Relevant when the inquiry is about a specific product a customer owns. */
  showModelAndCity?: boolean;
}

const MAX_FILES = 5;

type FieldErrors = Partial<Record<'name' | 'email' | 'subject' | 'message' | 'privacy', string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm({
  subjectOptions,
  defaultSubjectIndex,
  showAttachments = false,
  showModelAndCity = false,
}: ContactFormProps) {
  const content = useContent();
  const t = content.contactPage.form;
  const defaultSubject = defaultSubjectIndex !== undefined ? subjectOptions[defaultSubjectIndex] : '';

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    city: '',
    subject: defaultSubject,
    message: '',
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentsNotice, setAttachmentsNotice] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof typeof values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(event.target.files ?? []);
    event.target.value = '';
    if (picked.length === 0) return;

    setAttachments((prev) => {
      const combined = [...prev, ...picked];
      if (combined.length > MAX_FILES) {
        setAttachmentsNotice(t.attachmentsTooMany);
        return combined.slice(0, MAX_FILES);
      }
      setAttachmentsNotice(null);
      return combined;
    });
  }

  function removeAttachment(index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
    setAttachmentsNotice(null);
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = t.required;
    if (!values.email.trim()) next.email = t.required;
    else if (!isValidEmail(values.email)) next.email = t.invalidEmail;
    if (!values.subject.trim()) next.subject = t.required;
    if (!values.message.trim()) next.message = t.required;
    if (!privacyAccepted) next.privacy = t.privacyRequired;
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    try {
      const result = await submitContactForm({ ...values, attachments });
      if (result.ok) {
        setStatus('success');
        setValues({ name: '', email: '', phone: '', model: '', city: '', subject: '', message: '' });
        setAttachments([]);
        setAttachmentsNotice(null);
        setPrivacyAccepted(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full border bg-white px-4 py-2.5 text-sm text-wm-black outline-none transition-colors focus:border-wm-black',
      hasError ? 'border-red-600' : 'border-wm-gray-300',
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
            value={values.subject}
            onChange={(e) => update('subject', e.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'cf-subject-error' : undefined}
            className={inputClass(Boolean(errors.subject))}
          >
            <option value="" disabled>
              {t.subjectPlaceholder}
            </option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
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

      {showAttachments && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-wm-black">
            {t.attachmentsLabel} <span className="font-normal text-wm-gray-500">({t.attachmentsOptional})</span>
          </label>
          <p className="mb-2.5 text-xs text-wm-gray-500">{t.attachmentsHint}</p>

          <input
            ref={fileInputRef}
            id="cf-attachments"
            type="file"
            multiple
            accept="image/*,video/*,application/pdf"
            onChange={handleFilesSelected}
            className="sr-only"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={attachments.length >= MAX_FILES}
            className="inline-flex items-center justify-center border border-wm-gray-300 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-wm-black transition-colors hover:border-wm-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t.attachmentsButton}
          </button>

          {attachments.length > 0 ? (
            <ul className="mt-3 space-y-1.5">
              {attachments.map((file, index) => (
                <li
                  key={`${file.name}-${file.lastModified}-${index}`}
                  className="flex items-center justify-between gap-3 border border-wm-gray-300 bg-wm-gray-50 px-3 py-2 text-xs text-wm-gray-700"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
                    className="shrink-0 font-semibold uppercase tracking-wide text-wm-gray-500 hover:text-wm-black"
                  >
                    {t.attachmentsRemove}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-xs text-wm-gray-500">{t.attachmentsEmpty}</p>
          )}
          {attachmentsNotice && <p className="mt-1.5 text-xs text-red-600">{attachmentsNotice}</p>}
        </div>
      )}

      <div>
        <label className="flex items-start gap-2.5 text-sm text-wm-gray-700">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? 'cf-privacy-error' : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 border-wm-gray-300"
          />
          <span>{t.privacyLabel}</span>
        </label>
        {errors.privacy && (
          <p id="cf-privacy-error" className="mt-1.5 text-xs text-red-600">
            {errors.privacy}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center border border-wm-black bg-wm-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-wm-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? t.submitting : t.submit}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className="text-sm text-green-700">
            <span className="font-semibold">{t.successTitle}</span> {t.success}
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600">
            <span className="font-semibold">{t.errorTitle}</span> {t.error}
          </p>
        )}
      </div>
    </form>
  );
}
