# FitLog

FitLog is a dark-themed workout library and planning web application built with Next.js. It allows users to explore workouts, view detailed workout information, add exercises to their daily plan, save workouts for later, and track their training progress.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- REST API
- LocalStorage

## Key Features

### 1. Workout Library
Browse a collection of workouts with useful information such as:
- Workout name
- Muscle groups
- Equipment
- Duration
- Calories burned
- Rating

### 2. Workout Details
View detailed information about each workout, including:
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### 3. Today's Workout Plan
Add workouts to today's plan and manage them easily. Users can:
- Add workouts to the plan
- Remove workouts
- Mark workouts as done
- Track total exercises, minutes, and calories

### 4. Save Workouts
Save workouts for later and access them from the Saved tab in My Plan.

### 5. Responsive Design
FitLog is designed to work across:
- Mobile devices
- Tablets
- Desktop screens

The interface follows a dark, minimal, fitness-focused design inspired by the provided Figma design.

## API

FitLog uses workout data from the following API:

`https://api.abcz.workers.dev/api/fitlog`

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── workout/
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   └── my-plan/
│       └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── WorkoutCard.tsx
│   ├── LibrarySection.tsx
│   ├── WorkoutDetails.tsx
│   └── PlanCard.tsx
│
├── context/
│   └── PlanContext.tsx
│
├── types/
│   └── index.ts
│
└── utils/
    └── api.ts