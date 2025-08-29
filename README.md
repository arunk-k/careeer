
---

# Frontend – `README.md`

```md
# Book Review Board - Frontend

This is the **frontend** for the Book Review Board web application.  
It is built with **React (Vite)**, **Redux Toolkit**, and **React Router DOM**.  
The frontend communicates with the backend API to allow users to register, login, add books, and write reviews.

---

##  Tech Stack
- **React (Vite)** – Fast React setup
- **Redux Toolkit** – State management
- **React Router DOM** – Routing
- **Bootstrap 5 + React-Bootstrap** – UI styling
- **React Hot Toast** – Notifications
- **Axios** – API calls

---

##  API Base URL

- **Local Development** → `http://localhost:3214/api`  
- **Production (Render)** → `https://backendsr-gq8f.onrender.com/api`

---

## ⚙ Environment Variables (.env)

Create `.env` in frontend root:

```env
VITE_API_BASE_URL=http://localhost:3214/api
VITE_APP_NAME=Book Review Board
