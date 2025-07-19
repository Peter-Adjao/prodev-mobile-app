# ProDev Mobile App (Project 0x04)

A multi-screen mobile application built with **React Native**, **Expo Router**, and the **Stack Navigation pattern**. This project emphasizes modular styling, clean architecture, and centralized asset management.

## 📱 Features

- Stack Navigation via `expo-router`
- Screens: Home (`index.tsx`), Join (`join.tsx`), Sign In (`signin.tsx`)
- Centralized styling and constants for maintainability
- Asset-driven UI design for scalability
- Layout configuration through `_layout.tsx`

## 🛠️ Getting Started

### Project Setup

```bash
npx create-expo-app@latest prodev-mobile-app-0x04
cd prodev-mobile-app-0x04
npm run reset-project

# Assets
Download required assets and place them into:

assets/images/
````
# Folder Structure
bash
prodev-mobile-app-0x04/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── join.tsx
│   └── signin.tsx
├── assets/
│   └── images/
│       ├── hero-icon.png
│       ├── Logo.png
│       ├── logo-green.png
│       ├── google.png
│       └── facebook.png
├── constants/
│   └── index.ts
├── styles/
│   ├── _mainstyle.ts
│   └── _joinstyle.ts
├── README.md
├── package.json
└── ...

# 📦 Dependencies
Ensure the following are installed:

expo-router

All default Expo modules
