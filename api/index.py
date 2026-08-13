import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import resend

app = FastAPI(title="Vigneshwaran S Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "service": "Python FastAPI Contact Backend"}

@app.post("/api/send")
async def send_contact_email(request: Request):
    try:
        data = await request.json()
        name = str(data.get("name", "")).strip()
        email = str(data.get("email", "")).strip()
        subject = str(data.get("subject", "")).strip()
        message = str(data.get("message", "")).strip()

        if not name or not email or not subject or not message:
            return JSONResponse(
                status_code=400,
                content={"success": False, "error": "All fields (name, email, subject, message) are required."}
            )

        api_key = os.environ.get("RESEND_API_KEY")
        if not api_key:
            print("[Python FastAPI API] Error: RESEND_API_KEY environment variable is not defined.")
            return JSONResponse(
                status_code=500,
                content={"success": False, "error": "RESEND_API_KEY is not configured on the server."}
            )

        resend.api_key = api_key

        params = {
            "from": "Portfolio Contact <onboarding@resend.dev>",
            "to": "vigneshwaran.s.dev@gmail.com",
            "reply_to": f"{name} <{email}>",
            "subject": f"📩 New Portfolio Contact: {subject}",
            "html": f"""
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #09090B; color: #F4F4F5; padding: 24px; }}
                .card {{ background: #121214; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 24px; max-width: 600px; margin: 0 auto; }}
                .header {{ color: #8B5CF6; font-size: 20px; font-weight: bold; margin-bottom: 16px; }}
                .field {{ margin-bottom: 12px; }}
                .label {{ color: #A1A1AA; font-size: 12px; text-transform: uppercase; font-weight: 600; }}
                .val {{ color: #FFFFFF; font-size: 15px; margin-top: 4px; }}
                .msg-box {{ background: #18181B; border-radius: 12px; padding: 16px; margin-top: 16px; border: 1px solid rgba(255,255,255,0.05); }}
              </style>
            </head>
            <body>
              <div class="card">
                <div class="header">📩 New Portfolio Contact Form Submission</div>
                <div class="field"><div class="label">Name</div><div class="val">{name}</div></div>
                <div class="field"><div class="label">Email</div><div class="val">{email}</div></div>
                <div class="field"><div class="label">Subject</div><div class="val">{subject}</div></div>
                <div class="msg-box">
                  <div class="label">Message</div>
                  <div class="val" style="white-space: pre-wrap;">{message}</div>
                </div>
              </div>
            </body>
            </html>
            """
        }

        email_response = resend.Emails.send(params)
        return {"success": True, "id": email_response.get("id")}

    except Exception as e:
        print(f"[Python FastAPI API] Exception: {str(e)}")
        return JSONResponse(
            status_code=500,
            content={"success": False, "error": str(e)}
        )
