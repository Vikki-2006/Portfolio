# Vigneshwaran S | Python Full-Stack Developer Portfolio

A modern, high-performance personal developer portfolio showcasing my software engineering projects, technical skills, competitive programming achievements, verified certifications, and full-stack software engineering journey.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-000000?style=for-the-badge&logo=framer&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🚀 Live Demo

🔗 **Live Portfolio:** [https://vigneshwaran-dev.vercel.app/](https://vigneshwaran-dev.vercel.app/)

---

## 🏛️ Architecture

```text
React + JSX Frontend
        |
        | REST API
        v
Python FastAPI Backend
        |
        +---- Resend API
        |
        v
Email Inbox
```

---

## ✨ Features

- 🎨 **Modern Premium UI**: Glassmorphism design with responsive 60fps micro-animations.
- 🌗 **Dark & Light Theme**: Toggleable theme system with `localStorage` persistence.
- 📱 **Fully Responsive**: Mobile-first layout optimized for mobile, tablet, and desktop screens.
- ⚡ **Smooth Animations**: Hardware-accelerated transitions powered by Framer Motion & CSS keyframes.
- 💼 **Project Showcase**: Detailed cards showcasing real-world IoT, AI CLI, and Web applications.
- 🛠️ **Skills & Technologies**: Structured breakdown of core languages, frameworks, and developer tools.
- 📜 **Experience Section**: Full Stack Development Internship timeline with key achievements.
- 🏆 **Achievements**: Competitive programming highlights (LeetCode 300+ solved, CodeChef 1616 ★★★).
- 🎓 **Certifications**: Verified credentials from IBM, Meta, Infosys, VDart, and HackerRank.
- 📬 **Contact Form**: Interactive form with validation and real-time toast notification feedback.
- 📄 **Resume Access**: One-click direct resume preview and download.
- 🔥 **Recruiter-Friendly Design**: Fast load times, clean typography, and direct contact options.
- 🚀 **Performance Optimized**: Sub-second page rendering and optimized asset delivery.

---

## 🛠 Tech Stack

### Frontend
- React
- JavaScript / JSX
- Vite
- Tailwind CSS
- Framer Motion

### Backend
- Python
- FastAPI
- REST APIs

### Services
- Resend API

### Deployment
- Vercel

---

## 🐍 Python Backend

The portfolio utilizes a Python FastAPI serverless backend (`api/index.py`) for handling backend API functionality and transactional contact form emails:

- **Framework**: FastAPI
- **Architecture**: REST API Serverless Endpoint
- **Email Integration**: Resend Python SDK
- **Security**: Environment-based secret management (`RESEND_API_KEY`)

### API Endpoints

- `GET /api/health` — Confirms Python FastAPI backend status and health.
- `POST /api/send` — Receives contact submissions from the React frontend and dispatches emails via Resend.

---

## 📂 Project Structure

```text
Portfolio/
├── api/
│   └── index.py               # Python FastAPI backend (/api/send & /api/health)
├── src/
│   ├── components/            # React JSX UI components
│   ├── context/               # Theme context provider
│   ├── index.css              # Custom styling & Tailwind CSS setup
│   ├── App.jsx                # Main App wrapper & smooth scroll
│   └── main.jsx               # React DOM entry point
├── public/                    # Static assets & PDF resume
├── index.html                 # Entry HTML file
├── package.json               # Frontend dependencies
├── requirements.txt           # Python backend dependencies (fastapi, resend, uvicorn)
├── vercel.json                # Vercel serverless rewrites for FastAPI
└── vite.config.js             # Vite build configuration
```

---

## ⚙️ Local Development

### 1. Frontend

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

### 2. Backend (Optional)

```bash
# Install Python requirements
pip install -r requirements.txt

# Start FastAPI local server
uvicorn api.index:app --reload --port 8000
```

---

## 📄 License

&copy; 2026 Vigneshwaran S. All rights reserved.
