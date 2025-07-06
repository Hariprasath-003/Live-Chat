# 💬 Live Chat App

A real-time chat web application built with **Django**, **Django Channels**, and **WebSockets**. Supports image/audio/file uploads, typing indicators, push notifications, dark mode, and more — all deployed on **Render**.

🌐 **Live Demo:** [https://live-chat-g0z4.onrender.com/](https://live-chat-g0z4.onrender.com/)

---

## ⚡ Features

- 🔥 Real-time messaging with WebSockets (Django Channels)
- 💾 Message persistence with SQLite
- 🎧 Voice recording & playback support
- 📷 Image & file uploads (Cloudinary integration)
- ⏳ AJAX upload progress bar
- 👀 Typing indicators in chat
- 🌙 Dark mode toggle for better UX
- 🔔 Sound alerts and browser push notifications
- 🖼️ Responsive Bootstrap 5 frontend with Vanta.js fog background

---

## 🛠️ Tech Stack

| Layer      | Technology                                |
|------------|-------------------------------------------|
| **Backend**| Django 3.2, Django Channels                |
| **WebSockets** | ASGI + Redis (Upstash)                |
| **Database**| SQLite (Local), Cloudinary (Media files) |
| **Frontend**| HTML, CSS, JavaScript, Bootstrap 5       |
| **Audio**   | Web Audio API, `<audio>` tag, AJAX       |
| **Uploads** | Cloudinary Storage                       |
| **Deployment** | Render (Free Tier)                    |

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/YourUsername/Live-Chat.git
cd Live-Chat
```

### 2. Create virtual environment and install dependencies
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 3. Set up `.env` file for Cloudinary & secrets
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Apply migrations and run the app
```bash
python manage.py migrate
daphne Live_Chat.asgi:application
```

---

## 🗂️ Project Structure

```
Live_Chat/
├── Chat/
│   ├── templates/
│   ├── static/Chat/
│   ├── consumers.py
│   ├── views.py
│   ├── models.py
│   └── urls.py
├── Live_Chat/
│   ├── asgi.py
│   ├── settings.py
├── db.sqlite3
├── manage.py
└── README.md
```

---

## 🚀 Deployment

The app is deployed using:
- **Render** (Django + ASGI via `daphne`)
- **Cloudinary** for media file hosting
- **Upstash Redis** for real-time WebSocket messaging

---

## 🙌 Author

**Hariprasath**  
Fullstack Developer  
[GitHub](https://github.com/Hariprasath-003) | [LinkedIn](https://www.linkedin.com/in/hariprasath-l-174b54270)

---

## 📄 License

This project is licensed under the MIT License — feel free to use, modify, and share.
