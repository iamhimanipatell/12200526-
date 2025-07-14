# 🔗 ShortURL - URL Shortener Web App

**ShortURL** is a simple and efficient URL shortening application built using React (frontend) and Node.js (backend). It allows users to register, log in, shorten long URLs, and view analytics such as click statistics for each link.

---

<img width="842" height="834" alt="image" src="https://github.com/user-attachments/assets/1103b6c5-34a6-4483-b85b-6674e46506ad" />
<img width="604" height="761" alt="image" src="https://github.com/user-attachments/assets/21772a9f-ddb1-4b14-80c7-3504aad83496" />
<img width="635" height="855" alt="image" src="https://github.com/user-attachments/assets/44ae6a3d-f3fb-4007-9716-b4f03f2f7cdf" />
<img width="784" height="913" alt="image" src="https://github.com/user-attachments/assets/1a41a9a0-c6eb-443b-a467-a97eec17ab8e" />

<img width="729" height="907" alt="image" src="https://github.com/user-attachments/assets/f78fb14f-4493-4d91-ae24-a2971f1adbe8" />




---

## 🚀 Features

- 🔐 User authentication (Register/Login)
- 🔗 URL shortening
- 📊 Analytics: Track number of visits
- ✨ Clean and user-friendly UI
- 🧾 Logging middleware for actions

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- CSS

**Backend:**

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- Logging Middleware

---

## 📁 Folder Structure

```bash
root/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── urlController.js
│   ├── middleware/
│   │   └── logger.js
│   ├── models/
│   │   ├── User.js
│   │   └── Url.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── urlRoutes.js
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Shortener.jsx
│   │   │   └── Stats.jsx
│   │   ├── App.jsx
│   │   └── utils/
│   │       ├── generateCode.js
│   │       ├── isValidShortcode.js
│   │       └── api.js
│   ├── public/
│   └── package.json
└── README.md
