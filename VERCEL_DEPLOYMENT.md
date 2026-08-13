# Vercel Deployment & Environment Configuration

This portfolio is a **Full-Stack Application** featuring a **React + JavaScript frontend** and a **Python + FastAPI serverless backend** (`/api/send`) that processes contact form submissions via Resend.

## Setting up Resend API Key in Vercel

To allow the Python FastAPI backend (`/api/send`) to send emails securely, configure the `RESEND_API_KEY` environment variable in Vercel.

### Step-by-Step Instructions

1. **Get your Resend API Key**:
   - Go to [Resend Dashboard](https://resend.com).
   - Log in or create an account.
   - Go to **API Keys** in the left sidebar.
   - Click **Create API Key**. Copy the generated API Key.

2. **Add the Environment Variable to Vercel**:
   - Go to the [Vercel Dashboard](https://vercel.com).
   - Click on your Portfolio project.
   - Navigate to **Settings** -> **Environment Variables**.
   - Add variable:
     - **Key**: `RESEND_API_KEY`
     - **Value**: `your_api_key_here`
   - Click **Save**.

3. **Redeploy your Project**:
   - Trigger a new deployment on Vercel by pushing changes to Git.

## Local Development

1. Install frontend dependencies and run the Vite dev server:
   ```bash
   npm install
   npm run dev
   ```

2. (Optional) Run the Python FastAPI backend locally:
   ```bash
   pip install -r requirements.txt
   uvicorn api.index:app --reload --port 8000
   ```
