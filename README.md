# 🛒 E-commerce Admin Dashboard

🔗 **Live Demo:** [https://ecom-dashboard-bice.vercel.app/](https://ecommerce-admin-dashboard-ebwh.vercel.app/)
🔐 **Demo Credentials:**  
- Email: `admin@test.com`  
- Password: `password123`

A full-stack **E-commerce Admin Dashboard** built with **Next.js 14 (App Router)**.  
The application provides a secure, server-side rendered interface for managing products, visualizing inventory data, and handling media assets using cloud services.

---

## 📌 Overview

Managing an e-commerce backend involves secure authentication, structured data handling, and real-time visibility into inventory.  
This project replaces manual database operations with a **clean, visual, and production-ready admin dashboard**.

The focus of this project is to demonstrate:
- Robust full-stack architecture
- Secure authentication and route protection
- Server-side data fetching
- Scalable image handling
- Clean and maintainable code structure

---

## ✨ Features

### 🔐 Authentication & Security
- Authentication using **NextAuth.js**
- Protected routes via **Next.js Middleware**
- Automatic redirection for unauthenticated users
- Persistent sessions using encrypted JWTs

---

### 📦 Product Management
- Full **CRUD** functionality for products
- Dynamic forms with validation
- MongoDB schema enforcement using **Mongoose**
- Real-time updates reflected across the dashboard

---

### 🖼️ Image Uploads
- Cloud-based image storage using **Cloudinary**
- Image preview before saving
- Secure and scalable media handling

---

### 📊 Dashboard Analytics
- Interactive charts for inventory insights
- Category-wise product distribution
- Server-side data fetching for up-to-date metrics

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Authentication | NextAuth.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Styling | Tailwind CSS |
| Media Storage | Cloudinary |
| Deployment | Vercel |

---

## 📂 Project Structure

```bash
ecommerce-admin-dashboard/
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── login/
│   ├── product/
│   │   ├── add/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── models/
│   └── Product.ts
├── lib/
│   └── mongodb.ts
├── components/
│   └── Sidebar.tsx
├── public/
├── middleware.ts
├── next.config.js
├── package.json
└── .env
```

### How to set up

```
git clone <YOUR_REPO_URL>
cd ecommerce-admin-dashboard

npm install
```
create a .env file

```
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
Run the development server

```
npm run dev
```




