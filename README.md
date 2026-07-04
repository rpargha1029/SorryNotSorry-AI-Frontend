# SorryNotSorry - AI-Powered Excuse Generator 🤖✨

**SorryNotSorry** is a premium, state-of-the-art AI-powered excuse generator designed to help students, professionals, and everyone in between generate highly believable, customized excuses in seconds. Built with a gorgeous modern UI, rich animations, and powered by Gemini AI, it delivers context-aware responses tailored to any scenario.

---

## 🚀 Key Features

*   **Smarter AI Generation**: Get tailored excuse recommendations based on category (Work, School, Social, Family, etc.), audience, tone, and length.
*   **10+ Premium UI Themes**: Instantly change the styling of the app with handcrafted themes:
    *   *Midnight* (Default sleek cyan-indigo)
    *   *Sakura* (Deep purple & pink)
    *   *Emerald* (Elegant dark green)
    *   *Sunset* (Warm glowing orange)
    *   *Royal* (Deep premium violet)
    *   *Light* (Clean slate-blue layout)
    *   *Cyberpunk* (Vibrant neon pink & yellow)
    *   *Nord* (Frost arctic slate)
    *   *Rose Gold* (Premium rose stone)
    *   *Ocean* (Deep oceanic turquoise)
*   **Favorites & History**: Save your top-rated excuses to your favorites panel, and browse your generation history anytime.
*   **Real-time Analytics**: Track your excuse statistics in your personal profile, including a consecutive daily streak calculation based on your excuse generation history.
*   **Polished User Experience**: Built with smooth parallax glows, particles, micro-interactions, and premium card layouts.

---

## 🛠️ Tech Stack

*   **Frontend**: React 19, Vite, TailwindCSS v4, Framer Motion, Axios, React Icons, React Hot Toast.
*   **Backend**: FastAPI, Python, SQLite, SQLAlchemy, Gemini AI API.

---

## ⚙️ Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18+)
-   [npm](https://www.npmjs.com/)

### Installation & Run

1.  **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will run locally on `http://localhost:8000/`.

### API Configuration

The frontend communicates with the FastAPI backend. You can customize the backend base URL in:
👉 [`frontend/src/services/api.js`](file:///c:/Project/SorryNotSorry/frontend/src/services/api.js)

```javascript
const api = axios.create({
  baseURL: "http://172.23.193.44:8000", // Update with your FastAPI server IP & port
});
```

---

## 📄 License

Built With Love To Help You.
All Rights Reserved.
