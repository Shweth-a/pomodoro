# Pomodoro Timer (Mac Desktop App)

A pastel blue, star-themed Pomodoro Timer desktop app — built with Electron, animated with falling stars, and playing lofi music to help you focus.

---

## Features
- ⏱️ Customizable Timer: Set your study time, break time, and number of Pomodoro cycles.
- 🌌 Visual Hourglass: Blue stars fall into an hourglass during study and are released during breaks.
- ⏯️ Music Controls: Pause, play, mute/unmute, and control the volume of relaxing lofi music.
- 💻 Mac Desktop App: Launches directly from your desktop like a native app.

---

## Installation (Development Version)

1. Clone the Repository  
   `git clone https://github.com/Shweth-a/pomodoro.git`  
   `cd pomodoro`

2. Install Dependencies  
   Make sure Node.js is installed and then run `npm install`

3. Download whatever audio file you want as `lofi.mp3` and place it in the `assets` folder.

4. To run the app in dev mode, run `npm start` from within the `pomodoro` folder.

5. To generate a Desktop app, run `npm run dist`. The app will be built using Electron and will appear in the `pomodoro/dist/mac` folder.  
   You can copy-paste this to your desktop and double click to open like a regular app.
