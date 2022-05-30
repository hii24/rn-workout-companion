<div align="center">

# 💪 rn-workout-companion

**A no-nonsense workout tracker for React Native — sets, reps, rest timers, weekly stats**

_Built right before I joined a HealthTech team. Real users (me + 2 friends) for 8 months._

[![React Native](https://img.shields.io/badge/React_Native-0.68-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)](https://www.typescriptlang.org)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=fff)](https://redux.js.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-00C853?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- 🏋️ Build custom routines from a 200+ exercise library
- ⏱️ Auto rest timer between sets (with vibration cues)
- 📊 Weekly volume + 1RM estimates per muscle group
- 📈 Progress charts per exercise over time
- 🔌 Works fully offline — no account, no backend
- 📤 Export workout history to CSV

## 🚀 Run locally

```bash
git clone https://github.com/hii24/rn-workout-companion.git
cd rn-workout-companion
npm install
cd ios && pod install && cd ..
npm run ios   # or: npm run android
```

## 🧠 Why I built it

I was deep into RN at work but the apps were enterprise — I wanted to build something I'd actually use daily. Workouts are a perfect domain: tons of state, time-based UX (rest timers), data viz (progress charts), and you instantly notice if any of it lags.

It also gave me a clean RN codebase to point at when I started interviewing for HealthTech roles in 2022. The patterns from this app (timer hooks, persistent Redux state, chart components) ended up reused on my next job.

## 🛠️ Tech notes

- **State**: Redux + redux-persist, AsyncStorage backend
- **Charts**: `react-native-svg-charts`
- **Timers**: custom `useInterval` hook with background-safe pause/resume
- **Storage**: AsyncStorage with migration support across schema versions
- **Tests**: Jest covering reducers + 1RM calculation utilities

## 📜 License

MIT
