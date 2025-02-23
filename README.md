# 🦉 Overview

Callus is a simple and sleek productivity application available on both mobile and desktop platforms. Designed to enhance the productivity of entrepreneurs and professionals, Callus offers a comprehensive set of tools to help users stay organized and focused. The app aims to be accessible to a wide audience with a free version while offering advanced features in a pro version tailored for professionals.

## ✨ Key Features

-   **Real-Time Timetable with Notifications**: Stay on top of your schedule with real-time updates and notifications. 🕒
-   **To-Do List**: Manage your tasks efficiently with categorization, check-boxes, and drag-and-drop functionality. ✅
-   **Goal Setting**: Define and track your short-term and long-term goals with visual progress indicators. 🎯
-   **Calendar**: Manage your events in monthly, weekly, or daily views with reminders and notifications. 📅
-   **Integrated Notebook**: A distraction-free writing space for quick notes with Markdown support. 📝
-   **Deep Work Timer**: Enhance your focus with a built-in Pomodoro-style timer and customizable break intervals. ⏲️
-   **Inspirational Quotes**: Start your day with a motivational quote each time you open the app. 💭
-   **AI Assistant (Pro Version)**: Receive intelligent suggestions and productivity techniques tailored to your tasks and schedule. 🤖

## 🎨 Design Philosophy

Callus embraces a minimalist design philosophy, utilizing cards and containers with a clean black and white theme. This design ensures a distraction-free experience, allowing users to focus on their tasks and goals. 🖤🤍

## 📱 App Flow

### 🌿 Splash Screen

Users are greeted with a clean, black-and-white Callus logo and the inspiring slogan: "Express your thoughts." The splash screen seamlessly transitions to the authentication screen. ✨

### 🔐 Authentication System

-   **Login**: Users can log in with their email and password. 🦉
-   **Sign Up**: New users can create an account easily. 📝
-   **Password Recovery**: A straightforward recovery system for forgotten passwords. 🔑

### 🏠 Dashboard

Once authenticated, users are directed to a structured dashboard that provides an overview of their schedule, tasks, and notes. The navigation bar offers quick access to different sections of the app. 📊

## 🛠️ Development Plan

Our development plan is outlined in the CONTEXT.md file. It includes phases for learning and environment setup, UI and navigation setup, core features implementation, backend integration, testing, debugging, optimization, and deployment. 🚀

## 🌟 Future Updates

We have exciting plans for future updates, including:

-   **Dark Mode Customization**: Personalize your experience with a dark mode option. 🌙
-   **Collaborative Task Management**: Work together with your team on shared tasks. 🤝
-   **Voice-to-Text Note-Taking**: Easily capture your thoughts with voice-to-text functionality. 🎤

## 📂 Folder Structure

```
callus-dev-beta-01/
│── app/
│   ├── auth/
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   ├── forgot-pwd.tsx
│   ├── features/
│   │   ├── timetable/
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── TimetableItem.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useTimetable.ts
│   │   │   ├── services/
│   │   │   │   ├── timetable.ts
│   │   ├── todo/
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── TaskItem.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useTasks.ts
│   │   │   ├── services/
│   │   │   │   ├── tasks.ts
│   │   ├── goals/
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── GoalItem.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useGoals.ts
│   │   │   ├── services/
│   │   │   │   ├── goals.ts
│   │   ├── calendar/
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── CalendarItem.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useCalendar.ts
│   │   │   ├── services/
│   │   │   │   ├── calendar.ts
│   │   ├── notebook/
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── NoteItem.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useNotebook.ts
│   │   │   ├── services/
│   │   │   │   ├── notebook.ts
│   │   ├── timer/
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── TimerItem.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useTimer.ts
│   │   │   ├── services/
│   │   │   │   ├── timer.ts
│   │   ├── quotes/
│   │   │   ├── index.tsx
│   │   │   ├── components/
│   │   │   │   ├── QuoteItem.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useQuotes.ts
│   │   │   ├── services/
│   │   │   │   ├── quotes.ts
│── components/
│   ├── ui/
│   │   ├── TabBarBackground.tsx
│   │   ├── TabBarBackground.ios.tsx
│   │   ├── IconSymbol.tsx
│   │   ├── IconSymbol.ios.tsx
│   ├── ThemedView.tsx
│   ├── ThemedText.tsx
│   ├── ParallaxScrollView.tsx
│   ├── HelloWave.tsx
│   ├── HapticTab.tsx
│   ├── ExternalLink.tsx
│   ├── Collapsible.tsx
│── constants/
│   ├── Colors.ts
│── hooks/
│   ├── useThemeColor.ts
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│── context/
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│── lib/
│   ├── dateHelper.ts
│   ├── markdownParser.ts
│── types/
│   ├── Task.ts
│   ├── Event.ts
│── utils/
│   ├── timeUtils.ts
│   ├── stringUtils.ts
│── assets/
│   ├── logo.png
│   ├── icons/
│── styles/
│   ├── colors.ts
│   ├── typography.ts
│── App.tsx
│── package.json
│── package-lock.json
│── tsconfig.json
│── .eslintrc.js
│── .gitignore
│── README.md
│── CONTEXT.md
```
