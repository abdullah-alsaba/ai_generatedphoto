# 🎨 PixGen – AI Image Generation Gallery

PixGen is a modern AI-powered image gallery built with **Next.js** where users can explore AI-generated artwork, view detailed prompts, and manage their personal profiles through secure authentication. The application provides a clean, responsive interface with protected routes and Google Sign-In support.

---

## 🌐 Live Demo

🔗 **Live Site:** https://ai-generatedphoto.vercel.app

---

## 📌 Project Purpose

PixGen was built to provide a beautiful and interactive platform for showcasing AI-generated images. Users can browse different AI artworks, view detailed information about each image, authenticate securely, and manage their profiles.

---

## ✨ Features

- 🔐 Secure authentication with Better Auth
- 🚀 Google Sign-In authentication
- 👤 User profile page
- ✏️ Update profile (Name & Profile Image)
- 🖼️ AI image gallery with modern card layout
- 📄 Detailed image information page
- 🔒 Protected routes for Profile & Photo Details
- 🏷️ Category-based image filtering
- ❤️ Display likes and downloads
- 📱 Fully responsive design (Mobile, Tablet & Desktop)
- ⚡ Built with Next.js App Router
- 🎨 Modern AI-inspired UI

---

## 📸 Pages

### 🏠 Home

- Hero Banner
- Featured AI Images
- Responsive Layout

### 🖼️ All Photos

- View all AI-generated images
- Filter images by category
- Responsive grid layout

### 📄 Photo Details (Protected)

- Large image preview
- Prompt
- AI Model
- Resolution
- Category
- Tags
- Likes & Downloads

### 🔑 Authentication

- Sign Up
- Sign In
- Google Login

### 👤 Profile (Protected)

- User Name
- Email
- Profile Image
- Update Profile

---

## 🛠️ Tech Stack

### Frontend

- Next.js 16
- React
- Tailwind CSS
- HeroUI
- React Icons
- Gravity UI Icons

### Backend

- Better Auth
- MongoDB Atlas

### Deployment

- Vercel

---

## 📦 NPM Packages Used

### Core

- next
- react
- react-dom

### UI

- tailwindcss
- @heroui/react
- react-icons
- @gravity-ui/icons

### Authentication

- better-auth

### Database

- mongodb

### Notifications

- sonner

---

## 📂 Project Structure

```
app/
│
├── (auth)/
│   ├── signin
│   └── signup
│
├── all-photos
├── photos/[id]
├── profile
│
components/
data/
lib/
public/
```

---

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/abdullah-alsaba/ai_generatedphoto.git
```

Go to the project directory

```bash
cd pixgen
```

Install dependencies

```bash
npm install
```

Create your environment variables

```bash
.env.local
```

Run the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:3000
```

---

## 📱 Responsive Design

The application is fully optimized for:

- 📱 Mobile
- 💻 Laptop
- 🖥️ Desktop
- 📟 Tablet

---

## 🔒 Protected Routes

The following routes require authentication:

- `/profile`
- `/photos/[id]`

Unauthenticated users are redirected to the Sign In page.

---

## 🎯 Future Improvements

- ❤️ Favorite Images
- 💬 Comments
- 🌙 Dark / Light Theme
- 🔎 Search Functionality
- 📤 Download Images
- 📊 User Dashboard
- 🤖 AI Image Generation API Integration

---

## 👨‍💻 Author

**Abdullah Al Saba**

GitHub: https://github.com/abdullah-alsaba

---

## 📄 License

This project is developed for learning purposes and academic submission.
