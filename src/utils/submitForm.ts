export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  model: string;
  city: string;
  subject: string;
  message: string;
  attachments: File[];
}

/**
 * No backend exists yet. Replace this body with a real request once an
 * endpoint is available — the form and its validation around it don't need
 * to change. Because `attachments` holds real File objects, the real
 * request must be sent as `multipart/form-data` (not JSON) to carry them.
 */
export async function submitContactForm(payload: ContactFormPayload): Promise<{ ok: boolean }> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}
