# ---------------> “Callus” - The productivity app <--------------------

**Overview**

*Callus is a simple and sober application disponible on mobile and desktop. This app provides the user with multiple functionalities that enhance the productivity of its user making it the entrepreneur's best friend. Its purpose would be to be easily accessible for a wide public (free) but also highly recommended for professionals (pro version).*

**List of the content**

- A real time timetable with notifications;
- A to-do list;
- A goal setting section;
- A calendar with events & more;
- A notebook integrated in the app;
- // maybe // An help provided by AI in a given section;
- A timer in order to set deep work times;
- An inspirational quote everytime the user opens the app.

**Design**

*A simple design that use cards and containers with black an white themes. NO MORE.*




# ------------> DEV PLAN <-------------

## 1. **Introduction**

Callus is a productivity application available on both mobile and desktop. Designed for entrepreneurs and professionals, it provides a simple yet powerful set of tools to enhance productivity.

**Key Features:**

- Real-time timetable with notifications
- To-do list for task management
- Goal-setting section
- Calendar with event management
- Integrated notebook for quick notes
- Deep work timer for focused work sessions
- Daily inspirational quotes
- AI Assistant (Pro version)

### Tech Stack:

- Frontend: React Native with TypeScript, Expo, and Expo Router
- Backend/Database: Supabase
- UI Framework: React Native Paper
- AI Processing: DeepSeek

---

## 2. **App Flow**

### **Splash Screen**

- Displays a clean black and white **Callus** logo.
- Shows the slogan: **"Express your thoughts."**
- Transitions to authentication screen.

### **Authentication System**

- Users can **log in** with email & password.
- Option to **sign up** for a new account.
- Password recovery system.
- Once authenticated, the user is directed to the dashboard.

### **Dashboard**

- A simple and structured layout using **cards and containers**.
- Displays an **overview** of the user's schedule, tasks, and notes.
- Navigation bar for quick access to different sections (on the left).

---

## 3. **Core Features Implementation**

### **Timetable**

- Displays a **real-time** schedule.
- Users can add, edit, and delete events.
- **Notifications** for upcoming tasks.
- Sync with the calendar for seamless integration.

### **To-Do List**

- Users can create, edit, and delete tasks.
- Categorization of tasks (e.g., Work, Personal).
- Check-boxes for marking tasks as completed.
- Drag-and-drop functionality for reordering.

### **Goal Setting**

- Users can define **short-term** and **long-term** goals.
- Progress tracking with visual indicators.
- Integration with to-do lists and calendars.

### **Calendar**

- Displays events in a **monthly, weekly, or daily view**.
- Users can create, edit, and delete events.
- **Reminders & notifications** for upcoming events.
- Sync with external calendars (Google, Apple).

### **Notebook**

- A simple, **distraction-free writing space**.
- Users can **create, edit, and organize** notes.
- Markdown support for formatting.
- Sync across devices.

### **Deep Work Timer**

- A built-in **Pomodoro-style** timer.
- Users can set a focus duration (e.g., 25, 50 minutes).
- Customizable break intervals.
- **Statistics** to track productivity.

### **Inspirational Quotes**

- A new quote is displayed every time the user opens the app.
- Quotes are sourced from a pre-defined collection.
- Option to save favorite quotes.

---

## 4. **AI Assistant (Pro Version)**

- Available in the **Pro Version**.
- Provides intelligent suggestions based on tasks and schedule.
- Can summarize notes and suggest productivity techniques.

---

## 5. **Technical Development**

### **Database & API**

- User authentication and data storage.
- Real-time sync across devices.
- Secure cloud storage for notes and tasks.

### **UI/UX Development**

- Clean black & white theme.
- Minimalist and distraction-free interface.
- Optimized for both mobile and desktop.

### **Performance Optimization**

- Fast loading times.
- Efficient data handling.
- Offline mode for core features.

### **Testing & Debugging**

- Unit tests for core functionalities.
- Beta testing for usability feedback.
- Performance testing to ensure smooth operation.

### **Deployment & Launch**

- Release on **App Store & Google Play**.
- Desktop version available for **Windows, macOS, Linux**.
- Marketing campaign and user onboarding process.

---

## *6. **Future Updates***

- *Dark mode customization.*
- *Collaborative task management.*
- *Voice-to-text note-taking.*

---

*Callus - Express your thoughts.*

---

## **Re‑Managed Development Plan**

### **Phase 1: Learning & Environment Setup**

- **Learning React Native, Expo, and Expo Router:**
    
    *Estimated: 30–50 hours*
    
    Get comfortable with the basics of React Native, Expo, and the tools you’ll be using (including React Native Paper for UI components).
    
- **Project Setup:**
    
    *Estimated (included below in UI Setup)*
    

---

### **Phase 2: UI & Navigation Setup**

- **Project Setup & UI Design:***Estimated: 30–40 hours*
    - Create your Expo project and set up a clean folder structure.
    - Implement a minimalist black-and‑white theme.
    - Design the splash screen, authentication screen, and the dashboard layout with navigation (using Expo Router).
    

---

### **Phase 3: Core Features Implementation**

- **Features Implementation:***Estimated: 85–125 hours*Develop the main functionalities for the beta, such as:
    - **Timetable:** Real‑time schedule, event creation, notifications.
    - **To‑Do List:** Task creation, editing, categorization, and reordering.
    - **Goal Setting:** Define and track short‑term and long‑term goals.
    - **Calendar:** Monthly/weekly/daily views, event management, reminders.
    - **Notebook:** A distraction‑free space for notes with basic formatting (e.g., Markdown).
    - **Deep Work Timer:** A Pomodoro‑style timer with customizable intervals.
    - **Inspirational Quotes:** Display a new quote on each app launch (sourced from a pre‑defined list).
    

---

### **Phase 4: Backend Integration (Optional for Beta)**

- **Authentication & Data Persistence:***Estimated: 20–30 hours*If you opt to integrate Supabase for user authentication and data storage in your beta:
    - Set up Supabase and connect it with your app.
    - Replace local storage with API calls as needed.(For a “server‑less” beta, you might choose to postpone this phase or use local storage/AsyncStorage.)
    

---

### **Phase 5: Testing, Debugging & Optimization**

- **QA and Bug Fixing:***Estimated: 25–50 hours*
    - Write and run unit tests for core functionalities.
    - Perform hands‑on testing (emulators/physical devices) to catch and fix bugs.
    - Optimize performance (loading times, responsiveness).
    

---

### **Phase 6: Deployment & Beta Release**

- **Packaging & Release Preparation:***Estimated: 10–15 hours*
    - Prepare builds for mobile (APK/AAB for Android, and a corresponding build for iOS if applicable).
    - Set up beta distribution (e.g., using TestFlight for iOS or internal testing tracks on Google Play).
    

---

## **Total Estimated Time**

- **Without Backend Integration:** Approximately **180–280 hours**
- **With Backend Integration:** Approximately **200–310 hours**




# -----------> FOLDER STRUCTURE **!!( To FINISH )!!** <---------------

callus-dev-beta/
│── app/
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
│   ├── auth/
│   │   ├── log-in.tsx  // --> meretricious for now
│   │   ├── sign-up.tsx
│   │   ├── forgot-password.tsx
│   ├── settings.tsx
│── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Header.tsx
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
│── constants/
│   ├── quotes.ts
│   ├── categories.ts
│── styles/
│   ├── colors.ts
│   ├── typography.ts
│── App.tsx
│── package.json
|── package-lock.json
│── tsconfig.json
│── .eslintrc.js
│── .gitignore
│── README.md <MD>
│── CONTEXT.md <MD>