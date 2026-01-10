# Utility Bill Management System — Backend API

**RESTful backend API for the Utility Bill Management System**, built with Node.js, Express.js, MongoDB, and JWT authentication.

This API supports user management, bill records, payment tracking, and history retrieval for utility services.

---

## 🚀 Live Demo URL
**Base URL:** [https://b12a10v3.vercel.app](https://b12a10v3.vercel.app)

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – API routing
- **MongoDB** – NoSQL database
- **JWT** – Secure authentication
- **Cors** – Cross-origin requests
- **dotenv** – Environment config

---

## 📌 Key Features

- **User Authentication** – Register & login with JWT tokens
- **Bill Management** – CRUD operations for utility bills
- **Payment History** – Log and track payments securely
- **Secure Routes** – Middleware protection for private endpoints

---

## � API Endpoints

### 📍 Authentication
- **POST /auth/register** – Register a user
- **POST /auth/login** – Login and retrieve token

### 📍 Bills
- **GET /bills** – List all bills (with filters)
- **POST /bills** – Create a new bill
- **DELETE /bills/:id** – Remove a bill

### 📍 User Data
- **GET /users/me** – Get current user profile
- **GET /my-bills** – Get user's paid bills

---

## 📁 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=<YOUR_MONGODB_URI>
JWT_SECRET=<YOUR_JWT_SECRET>
```

---

## 🛠 Running Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/jahan-d/Utility-Bill-Management-System-server.git
   cd Utility-Bill-Management-System-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm run dev
   ```

4. **API runs at:** `http://localhost:5000`

---

## 📝 Author

**Jahan**
- Portfolio: [jahan-d.web.app](https://jahan-d.web.app)
- GitHub: [@jahan-d](https://github.com/jahan-d)
