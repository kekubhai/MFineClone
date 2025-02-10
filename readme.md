# Mfine Clone - Expo React Native App

## 📌 Overview
This is a **React Native** app built using **Expo**, featuring authentication, navigation, and various healthcare functionalities like consulting doctors, booking lab tests, and managing profiles.

## 🛠️ Prerequisites
Ensure you have the following installed:
- **Node.js** (LTS recommended)
- **Expo CLI** (`npm install -g expo-cli`)
- **Firebase Project** (with Authentication enabled)

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/mfine-clone.git
cd mfine-clone
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Phone Authentication** under Authentication settings.
3. Copy your Firebase **API keys** and update `firebase.ts`.

### 4️⃣ Run the App
```sh
expo start
```
Use **Expo Go** on your phone or an emulator to test the app.

## 🔑 Features
✅ **Phone Authentication (OTP-based)**
✅ **Protected Routes (Auth-based navigation)**
✅ **Bottom Tab & Drawer Navigation**
✅ **Consult a Doctor & Lab Test Booking**
✅ **Profile Management**

## 📂 Folder Structure
```
📦 mfine-clone
 ┣ 📂 app/
 ┃ ┣ 📂 (auth)/      # Login & Signup Screens
 ┃ ┣ 📂 (tabs)/      # Home, Doctors, Profile Screens
 ┃ ┣ _layout.tsx    # Main Navigation
 ┃ ┗ index.tsx      # Entry Point
 ┣ 📂 components/    # UI Components
 ┣ 📂 hooks/         # Custom Hooks
 ┣ 📂 services/      # Firebase API
 ┣ 📂 utils/         # Helper Functions
 ┣ app.json          # Expo Config
 ┣ package.json      # Dependencies
 ┗ tsconfig.json     # TypeScript Config
```

## 🛠️ Additional Commands
### Running on iOS Simulator
```sh
expo run:ios
```
### Running on Android Emulator
```sh
expo run:android
```
### Building APK
```sh
expo build:android
```
### Building iOS App
```sh
expo build:ios
```

## 🙌 Contribution
Feel free to submit pull requests or report issues. Happy coding! 🚀
