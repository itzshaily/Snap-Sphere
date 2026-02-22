# 🚀 SnapSphere – MERN Social Media App

SnapSphere is a full-stack MERN application that allows users to create posts with images and captions and view them in a dynamic feed. 
The application demonstrates REST API integration, image upload handling, and modern UI design using React.

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file uploads)
- CORS
- Dotenv

---

## ✨ Features

- 🖼 Upload images with captions
- 📄 View posts in feed
- 🔄 Real-time API integration using Axios
- 📦 RESTful API architecture
- 🗂 Cloud image upload handling
- 🎨 Responsive card-based UI
- 🔀 React Router navigation
- 🌐 CORS enabled backend

---

## 📂 Project Structure

SnapSphere/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── CreatePost.jsx
│ │ │ ├── Feed.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│
├── backend/
│ ├── models/
│ ├── services/
│ ├── server.js
│ ├── .env
│ └── package.json

---

## ⚙️ Installation & Setup

### 1️⃣ clone repository
git clone https://github.com/yourusername/snapsphere.git
cd snapsphere

### 2️⃣ Backend Setup
cd backend
npm install

Create a .env file:
MONGO_URI=your_mongodb_connection_string
PORT=3000

Start backend server:
npm start

### 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:5173

Backend runs on:  http://localhost:3000

🔌 API Endpoints
➤ Create Post
POST /create-post

Form-data:
image
caption

➤ Get All Posts
GET /posts

📸 UI Preview
<img width="1919" height="1083" alt="Screenshot 2026-02-22 152545" src="https://github.com/user-attachments/assets/b8958933-a35f-4ee7-b9c0-9acda396fb4f" />

