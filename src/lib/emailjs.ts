/**
 * src/lib/emailjs.ts
 * EmailJS integration — sends contact form to vikki.29062006@gmail.com
 */

import emailjs from '@emailjs/browser';

// ── Credentials from .env ─────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

// ── Startup diagnostic — visible in DevTools Console on page load ─────────
console.log('[EmailJS] SERVICE_ID  =', SERVICE_ID  || '❌ MISSING');
console.log('[EmailJS] TEMPLATE_ID =', TEMPLATE_ID || '❌ MISSING');
console.log('[EmailJS] PUBLIC_KEY  =', PUBLIC_KEY  || '❌ MISSING');

// ── Initialise EmailJS with your public key ───────────────────────────────
// Must be called before any send()
emailjs.init(PUBLIC_KEY);

// ── Types ─────────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ── Send function ─────────────────────────────────────────────────────────
/**
 * Sends the contact form to vikki.29062006@gmail.com via EmailJS.
 *
 * Template variables used (must match your EmailJS template exactly):
 *   {{name}}     – sender's full name
 *   {{email}}    – sender's email address
 *   {{subject}}  – subject line
 *   {{message}}  – message body
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Log what we're about to send so you can verify in the console
  console.log('[EmailJS] Sending with:', {
    serviceId:  SERVICE_ID,
    templateId: TEMPLATE_ID,
    params: {
      name:    data.name,
      email:   data.email,
      subject: data.subject,
      message: data.message,
    },
  });

  try {
    const response = await emailjs.send(
      SERVICE_ID,   // service_qcnghec
      TEMPLATE_ID,  // template_a2d0de8
      {
        name:    data.name,     // → {{name}}    in template
        email:   data.email,    // → {{email}}   in template
        subject: data.subject,  // → {{subject}} in template
        message: data.message,  // → {{message}} in template
      },
      PUBLIC_KEY    // ECus_eX0Jbq60hWyy  (also passed to init above)
    );

    console.log('[EmailJS] ✅ Success:', response.status, response.text);
  } catch (error: unknown) {
    // Log the full raw error object so nothing is hidden
    console.error('[EmailJS] ❌ Full error:', error);

    // Surface a readable message to the caller
    const ejsError = error as { status?: number; text?: string; message?: string };
    const detail =
      ejsError.status && ejsError.text
        ? `Status ${ejsError.status}: ${ejsError.text}`
        : ejsError.message ?? String(error);

    throw new Error(detail);
  }
}
