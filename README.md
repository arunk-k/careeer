
---

# Frontend – `README.md`

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

frontend/
|-- src/
|   |-- components/     # Shared UI components
|   |-- context/        # AuthContext
|   |-- features/       # Redux slices & thunks
|   |-- pages/          # Pages (Books, BookDetails, Auth, AddBook)
|   |-- services/       # API services
|   |-- App.jsx         # App entry
|-- public/
|-- package.json

## Setup Instructions

1. Clone the repo:
   -git clone https://github.com/arunk-k/frontend.git
   -cd frontend

2.Install dependencies:
   -npm install
3.Start server:
   -node index.js/nodemon

## Screenshots

### Home Page
![Home Page](./screenshots/homepage.png)

### Login Page
![Login Page](./screenshots/login.png)

### Book Details
![Book Details](./screenshots/bookdetails.png)





