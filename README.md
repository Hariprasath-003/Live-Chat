# 💬 Live Chat App

A real-time chat web application built with **Django**, **Django Channels**, and **WebSockets**, with full support for **image/audio/file uploads**, **typing indicators**, **push notifications**, and more — all deployed on [Render](https://render.com).

🌐 **Live Demo**: [https://live-chat-g0z4.onrender.com/](https://live-chat-g0z4.onrender.com/)

---

## ⚡ Features

- 🔥 Real-time messaging with WebSocket (Django Channels)
- 💾 Message persistence in SQLite DB
- 🎧 Voice recording & playback
- 📷 Image & file uploads (stored via **Cloudinary**)
- ⏳ Upload progress bar with AJAX
- 👀 Typing indicators
- 🌙 Dark mode toggle
- 🔔 Sound alerts + browser push notifications
- 🖼️ Responsive Bootstrap 5 frontend with **Vanta.js fog** background

---

## 🛠️ Tech Stack

| Layer         | Technology                             |
|---------------|-----------------------------------------|
| Backend       | Django 3.2, Django Channels             |
| WebSockets    | ASGI + Redis (via Upstash)             |
| Realtime DB   | SQLite (local), Cloudinary (media)     |
| Frontend      | HTML, CSS, JS, Bootstrap 5             |
| Audio         | Web Audio API, AJAX, `<audio>` tag     |
| Uploads       | Cloudinary Storage                     |
| Deployment    | Render (Free Tier)                     |

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

git clone https://github.com/YourUsername/Live-Chat.git
cd Live-Chat

2. Create virtual environment and install dependencies

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

3. Set up .env for Cloudinary & other secrets

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. Run the app

python manage.py migrate
daphne Live_Chat.asgi:application

Project Structure

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


Deployment
The app is deployed on Render with:

daphne ASGI server

Cloudinary for media

Upstash Redis for Channels

🙌 Author
Hariprasath
Fullstack Developer


