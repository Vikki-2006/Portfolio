/**
 * src/lib/web3forms.ts
 * Web3Forms integration — sends contact form submissions securely using VITE_WEB3FORMS_ACCESS_KEY
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;

/**
 * Sends the contact form submission via Web3Forms API.
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!ACCESS_KEY) {
    throw new Error('Web3Forms Access Key is missing in environment variables.');
  }

  const formData = new FormData();
  formData.append('access_key', ACCESS_KEY);
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('subject', data.subject);
  formData.append('message', data.message);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Server returned error status: ${response.status}`);
  }

  const result = await response.json() as { success: boolean; message?: string };
  if (!result.success) {
    throw new Error(result.message || 'Web3Forms submission was not successful.');
  }
}
