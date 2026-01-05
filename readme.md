# Utility Bill Management System — Backend API

**RESTful backend API for the Utility Bill Management System**, built with Node.js, Express.js, MongoDB, and JWT authentication.  
This API supports user management, bill records, payment tracking, and history retrieval for utility services.

---

## 🚀 Related Frontend
Utility Bill Management System frontend:  
https://github.com/jahan-d/Utility_Bill_Management_System_client

---

## 🛠️ Tech Stack

- **Node.js** – Backend runtime  
- **Express.js** – API routing  
- **MongoDB** – NoSQL database  
- **JWT** – Secure authentication  
- **Cors** – Enable cross-origin requests  
- **dotenv** – Environment config

---

## 📌 Key Features

- **User Authentication** – Register & login with JWT tokens  
- **Bill Records** – Create, read, update, delete bill entries  
- **Payment History** – Log and track utility payments  
- **Late Payment Tracking** – Monitor late payments for each user  
- **Secure Routes** – Protected endpoints for authenticated users

---

## 🔗 API Endpoints

### 📍 Authentication
- **POST /auth/register** – Register a new user  
- **POST /auth/login** – Login user and return JWT  

### 📍 Users
- **GET /users** – List all users (Admin only)  
- **GET /users/:id** – Get single user details  
- **PUT /users/:id** – Update user profile  
- **DELETE /users/:id** – Remove user (Admin)

### 📍 Bills
- **POST /bills** – Create a new bill  
- **GET /bills** – Get all bills  
- **GET /bills/:id** – Get bill by ID  
- **PUT /bills/:id** – Update a bill  
- **DELETE /bills/:id** – Remove a bill

### 📍 Payments
- **POST /payments** – Log a payment  
- **GET /payments** – List all payments  
- **GET /payments/user/:userId** – Payments by user  
- **GET /payments/bill/:billId** – Payments for a specific bill

---

## 📁 Environment Variables

Create a `.env` file at the root with:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=your_frontend_url

yaml
Copy code

Replace placeholder values with your real config.

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/jahan-d/Utility_Bill_Management_System_server
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm run dev
The API runs at:

arduino
Copy code
http://localhost:5000
🧠 How It Fits Together
This backend serves the Utility Bill Management front end, supporting:

User login & session management

CRUD operations for bills

Payment tracking and history

Late payment detection

When combined with the frontend, users can:
✔ View their bill history
✔ Make payments
✔ Generate and download reports via client logic

📌 Author
Jahan Ebna Delower
Full-Stack Developer — MERN
Portfolio: https://jahan-d.web.app
GitHub: https://github.com/jahan-d
