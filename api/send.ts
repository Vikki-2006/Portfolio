import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Lazily initialize Resend client to ensure environment variables are loaded
let resendClient: Resend | null = null;

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[API /api/send] CRITICAL ERROR: process.env.RESEND_API_KEY is not defined!');
    throw new Error('RESEND_API_KEY environment variable is missing on the server.');
  }
  
  if (!resendClient) {
    console.log('[API /api/send] Initializing Resend client with API Key.');
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Ensure JSON response header is set
  res.setHeader('Content-Type', 'application/json');

  console.log(`[API /api/send] Received request: ${req.method} ${req.url}`);

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.warn(`[API /api/send] Method ${req.method} not allowed`);
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    console.log('[API /api/send] Request body:', JSON.stringify(body));

    const { name, email, subject, message } = body || {};

    // Validate required fields
    if (!name || !name.trim() || !email || !email.trim() || !subject || !subject.trim() || !message || !message.trim()) {
      console.warn('[API /api/send] Validation failed: Missing one or more required fields');
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // Validate email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn(`[API /api/send] Validation failed: Invalid email format (${email})`);
      return res.status(400).json({ success: false, error: 'Invalid email address.' });
    }

    // Sanitize input
    const cleanName = escapeHtml(name.trim());
    const cleanEmail = escapeHtml(email.trim());
    const cleanSubject = escapeHtml(subject.trim());
    const cleanMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />');

    // Timestamp formatted in IST timezone
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    console.log('[API /api/send] Preparing to send email via Resend SDK...');
    
    // Obtain Resend client
    const resend = getResendClient();

    // Send email using Resend
    const resendResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'vigneshwaran.s.dev@gmail.com',
      replyTo: `${name.trim()} <${email.trim()}>`,
      subject: `📩 New Portfolio Contact: ${subject.trim()}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Portfolio Contact</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              background-color: #f8fafc;
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
            }
            .wrapper {
              background-color: #f8fafc;
              padding: 40px 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
              border: 1px solid #e2e8f0;
            }
            .header {
              background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
              padding: 32px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 22px;
              font-weight: 800;
              letter-spacing: -0.5px;
            }
            .content {
              padding: 32px;
            }
            .field {
              margin-bottom: 24px;
            }
            .field-label {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #64748b;
              font-weight: 700;
              margin-bottom: 6px;
            }
            .field-value {
              font-size: 14px;
              color: #0f172a;
              line-height: 1.6;
              background: #f8fafc;
              padding: 12px 16px;
              border-radius: 8px;
              border: 1px solid #f1f5f9;
            }
            .message-box {
              white-space: pre-wrap;
              word-break: break-word;
            }
            .footer {
              padding: 24px 32px;
              background: #f8fafc;
              border-top: 1px solid #f1f5f9;
              text-align: center;
            }
            .footer p {
              margin: 0;
              font-size: 12px;
              color: #64748b;
            }
            .footer a {
              color: #7c3aed;
              text-decoration: none;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <h1>📩 New Portfolio Contact</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${cleanName}</div>
                </div>
                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">${cleanEmail}</div>
                </div>
                <div class="field">
                  <div class="field-label">Subject</div>
                  <div class="field-value">${cleanSubject}</div>
                </div>
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="field-value message-box">${cleanMessage}</div>
                </div>
                <div class="field">
                  <div class="field-label">Submitted</div>
                  <div class="field-value">${timestamp}</div>
                </div>
              </div>
              <div class="footer">
                <p>Sent from Portfolio: <a href="https://vigneshwaran2006.vercel.app">https://vigneshwaran2006.vercel.app</a></p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('[API /api/send] Resend API response:', JSON.stringify(resendResponse));

    const { data, error } = resendResponse;

    if (error) {
      console.error('[API /api/send] Resend SDK returned an error:', error);
      console.error('[API /api/send] Full Resend Error Details:', JSON.stringify(error, null, 2));
      return res.status(400).json({ success: false, error: error.message || 'Failed to send email via Resend.' });
    }

    console.log('[API /api/send] Email sent successfully. Message ID:', data?.id);
    return res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error('[API /api/send] Serverless function caught exception:', err);
    if (err instanceof Error) {
      console.error('[API /api/send] Exception Stack Trace:', err.stack);
    }
    return res.status(500).json({ success: false, error: err.message || 'Internal Server Error' });
  }
}
