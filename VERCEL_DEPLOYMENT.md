# Vercel Deployment & Environment Configuration

This project is configured to use Vercel Serverless Functions with Resend to process contact form submissions.

## Setting up Resend API Key in Vercel

To allow the serverless function (`/api/send`) to send emails securely, you need to configure the `RESEND_API_KEY` environment variable in Vercel.

### Step-by-Step Instructions

1. **Get your Resend API Key**:
   - Go to [Resend Dashboard](https://resend.com).
   - Log in or create an account.
   - Go to **API Keys** in the left sidebar.
   - Click **Create API Key**. Give it a descriptive name (e.g. `Portfolio Website`) and make sure it has permissions to send emails.
   - Copy the generated API Key.

2. **Add the Environment Variable to Vercel**:
   - Go to the [Vercel Dashboard](https://vercel.com).
   - Click on your Portfolio project.
   - Navigate to the **Settings** tab.
   - Select **Environment Variables** in the left menu.
   - Add a new variable:
     - **Key**: `RESEND_API_KEY`
     - **Value**: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` (paste the API Key you copied from Resend)
     - Keep all environments checked (**Production**, **Preview**, **Development**).
   - Click **Save**.

3. **Redeploy your Project**:
   - For the changes to take effect, trigger a new deployment on Vercel (e.g., commit/push the changes to your Git repository connected to Vercel).

## Local Development (Optional)

If you are developing locally and want to test the serverless function endpoint, you can run the Vercel CLI:

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Pull environment variables and run the dev environment:
   ```bash
   vercel env pull .env.local
   vercel dev
   ```
   This will run Vite and the Serverless Functions handler locally on `http://localhost:3000`.
