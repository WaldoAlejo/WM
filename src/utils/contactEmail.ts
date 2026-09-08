export interface ContactEmailValues {
  name: string;
  email: string;
  phone: string;
  model: string;
  city: string;
  subject: string;
  message: string;
}

type EmailLabels = Record<keyof ContactEmailValues, string>;

/** Prepares a draft locally. It never sends a request or claims delivery. */
export function prepareContactEmail(
  recipient: string,
  values: ContactEmailValues,
  labels: EmailLabels,
  includeProductDetails: boolean,
  productContext = '',
) {
  const fields: Array<keyof ContactEmailValues> = ['name', 'email', 'phone'];
  if (includeProductDetails) fields.push('model', 'city');
  const details = fields
    .filter((field) => values[field].trim())
    .map((field) => `${labels[field]}: ${values[field].trim()}`);
  const subject = values.subject.trim();
  if (productContext) details.unshift(productContext);
  const body = [...details, '', `${labels.message}:`, values.message.trim()].join('\r\n');
  return {
    href: `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    text: `${recipient}\r\n${labels.subject}: ${subject}\r\n\r\n${body}`,
  };
}
