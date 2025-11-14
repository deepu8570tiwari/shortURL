# 🔗 URL Shortener API (Node.js + Docker)
A simple and efficient **URL Shortener API** built with **Node.js**, **Express**, **MongoDB**, and **Docker**. This project generates short URLs, redirects users to the original long URLs, and provides analytics for each link.

---

## 🚀 Features
- Create a short URL from any long URL
- Redirect short URL to the original link
- Track analytics (total clicks, timestamps, etc.)
- Environment variable support (`.env`)
- Fully containerized using **Docker**
- MongoDB for persistent storage

---

## 📁 Project Structure
```
📦 shortUrl
├── 📁 src
│   ├── controllers
│   ├── models
│   ├── routes
│   └── index.js
├── .env
├── .gitignore
├── Dockerfile
├── .dockerignore
└── package.json
```

---

## 🧩 API Endpoints
### ✨ Base URL
```
https://shorturl-1-0gow.onrender.com/
```
---

### 🔹 **Create Short URL**
```
POST /urls
```
**Body:**
```json
{
  "longUrl": "https://example.com/some/very/long/path"
}
```
**Response:**
```json
{
  "shortId": "aB3xYz",
  "shortUrl": "http://localhost:8000/urls/aB3xYz"
}
```
---

### 🔹 **Redirect to Original URL**
```
GET /urls/:shortId
```
Redirects instantly to long URL.

---

### 🔹 **Get URL Analytics**
```
GET /urls/analytics/:shortId
```
**Response Example:**
```json
{
  "totalClicks": 12,
  "analytics": [
    { "timestamp": "2025-11-03T10:20:15Z" },
    { "timestamp": "2025-11-03T11:45:30Z" }
  ]
}
```

---

## 🔧 Environment Variables (.env)
Create a `.env` file inside the root:
```
PORT=8000
MONGO_URI=mongodb+srv://your-mongo-url
```

---

## 🐳 Docker Setup
This project is fully Dockerized.

### 📄 **Dockerfile** (already included)
Builds a lightweight production-ready Node.js image.

### 🔥 Build Docker Image
```
docker build -t shorturl-app .
```

### ▶ Run Docker Container
```
docker run -p 8000:8000 --env-file .env shorturl-app
```

Your API will now be live at:
```
https://shorturl-1-0gow.onrender.com/
```

---

## 📦 Install Locally (Without Docker)
### 1️⃣ Install dependencies
```
npm install
```

### 2️⃣ Start development server
```
npm run dev
```

### 3️⃣ Start production server
```
npm start
```

---

## 📌 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- nanoid (unique short ID generator)
- Docker
- Nodemon (development)

---

## 🤝 Contribution
Contributions and suggestions are welcome.

---

## 📜 License
ISC License

