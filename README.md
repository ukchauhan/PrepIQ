# 🧠 PrepIQ — Preparation Intelligence Quotient

> **AI-Powered Interview Preparation Platform** built with MERN Stack + Google Gemini AI

## 📌 About PrepIQ

**PrepIQ** is a full-stack AI-powered interview preparation platform that helps job seekers bridge the gap between their current skills and job requirements. Users simply provide their **Job Description**, **Self Description**, and **Resume** — and Gemini AI takes care of the rest.

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🔍 **Skill Gap Analysis** | AI analyzes the gap between your skills and job requirements |
| 📝 **Technical Questions** | Auto-generates technical interview questions based on JD |
| 🤝 **Behavioural Questions** | Generates behavioural questions with ideal answers |
| 📅 **7-Day Preparation Plan** | Personalized day-by-day study plan for interview prep |
| 📊 **Resume Match Score** | AI scores how well your resume matches the job description |
| 📄 **Resume Generator** | Generates a professional resume based on user's profile |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — UI Framework
- **Vite** — Build Tool
-  **SCSS** — Styling

### Backend
- **Node.js** — Runtime Environment
- **Express.js** — Web Framework
- **MongoDB** — Database

### AI
- **Google Gemini AI** — Powers all AI features

### Other
- **JWT** — Authentication
- **Bcrypt** — Password Hashing
- **PDF-Parse** — Resume PDF Parsing
- **Puppeteer** — Resume Generation

---

## 📁 Project Structure

```
prepIQ/
└── backend/
    ├── config/             # Database (MongoDB) and Gemini API configurations
    ├── controllers/        # Handles request/response logic for Auth and Interview
    ├── middlewares/        # Auth guards (JWT) and error handling
    ├── models/             # Mongoose schemas (User, Resume, InterviewPlan)
    ├── routes/             # API endpoints (authRoutes.js, interviewRoutes.js)
    ├── services/           # External logic (Gemini API calls, PDF parsing)
    ├── app.js              # Express app configuration
    ├── server.js           # Entry point (port listening)
    └── .env                # Environment variables (API Keys, DB URI)

prepIQ/
└── frontend/
    └── src/
        ├── features/
        │   ├── auth/
        │   │   ├── components/
        │   │   ├── hooks/          # useAuth custom hook
        │   │   ├── pages/          # Login and Signup pages
        │   │   ├── services/       # Axios calls for authentication
        │   │   ├── auth.context.jsx
        │   │   └── auth.form.scss
        │   └── interview/
        │       ├── components/     # Analysis results, 7-day plan display
        │       ├── hooks/          # useInterview hook for state management
        │       ├── pages/          # Dashboard, Gap Analysis, Prep Plan
        │       ├── services/       # Axios calls for Gemini processing
        │       ├── style/          # Specific styles for interview features
        │       └── interview.context.jsx
        ├── assets/                 # Images, icons, and global fonts
        ├── App.jsx                 # Main component
        ├── app.routes.jsx          # Route definitions (Private vs Public)
        ├── main.jsx                # Entry point
        └── style.scss              # Global styles and variables
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account
- Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/ukchauhan/PrepIQ.git
cd PrepIQ
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

---

## 🚀 How It Works

1. **User Signs Up / Logs In**
2. **User Provides:**
   - Job Description
   - Short Self Description
   - Resume (PDF)
3. **Gemini AI Generates:**
   - Skill Gap Analysis
   - Technical Interview Questions + Answers
   - Behavioural Interview Questions + Answers
   - 7-Day Preparation Plan
   - Resume Match Score
   - AI Generated Resume

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `GEMINI_API_KEY` | Google Gemini API key |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**ukchauhan**
- GitHub: [@ukchauhan](https://github.com/ukchauhan)


<p align="center">Made with ❤️ and powered by Google Gemini AI</p>
