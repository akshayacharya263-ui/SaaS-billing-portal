
# Role-Based SaaS Billing Portal

## Features
- User Authentication (JWT)
- Role-Based Access (Admin/User)
- Dashboard
- Billing Plans
- Invoice Management
- Protected Routes
- MongoDB Database
- React Frontend + Express Backend

---

# Step-by-Step Setup

## 1. Install Software
Install:
- Node.js
- MongoDB

## 2. Open Project

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 3. MongoDB
Start MongoDB locally.

## 4. Environment File

Create `.env` inside backend:

```env
MONGO_URI=mongodb://127.0.0.1:27017/saasbilling
JWT_SECRET=mysecretkey
PORT=5000
```

## 5. Open Browser
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
