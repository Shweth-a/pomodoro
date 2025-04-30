// Initialize variables
let totalTimeInput = document.getElementById('totalTime');
let breakTimeInput = document.getElementById('breakTime');
let cyclesInput = document.getElementById('cycles');
let startButton = document.getElementById('startTimer');
let pauseButton = document.getElementById('pauseTimer');
let resetButton = document.getElementById('resetTimer');
let timeRemainingDisplay = document.getElementById('timeRemaining');

let totalTime = parseInt(totalTimeInput.value) * 60;
let breakTime = parseInt(breakTimeInput.value) * 60;
let cycles = parseInt(cyclesInput.value);
let currentCycle = 1;
let timerInterval;
let isRunning = false;
let isPaused = false;
let isBreak = false;
let remainingTime = totalTime;

function updateTimerDisplay(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  timeRemainingDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, 
'0')}`;
}

function toggleTimer() {
  if (!isRunning) {
    // Start the timer
    isRunning = true;
    isPaused = false;
    timerInterval = setInterval(() => {
      if (!isPaused) {
        if (remainingTime > 0) {
          remainingTime--;
          updateTimerDisplay(remainingTime);
        } else {
          clearInterval(timerInterval);
          isRunning = false;
          if (!isBreak) {
            if (currentCycle < cycles) {
              currentCycle++;
              isBreak = true;
              remainingTime = breakTime;
              alert('Time to take a break!');
              toggleTimer();
            } else {
              alert('All cycles complete!');
            }
          } else {
            isBreak = false;
            remainingTime = totalTime;
            alert('Break is over. Starting next Pomodoro cycle.');
            toggleTimer();
          }
        }
      }
    }, 1000);
  } else if (isPaused) {
    // Resume the timer
    isPaused = false;
  } else {
    // Pause the timer
    isPaused = true;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  isPaused = false;
  isBreak = false;
  currentCycle = 1;
  totalTime = parseInt(totalTimeInput.value) * 60;
  breakTime = parseInt(breakTimeInput.value) * 60;
  cycles = parseInt(cyclesInput.value);
  remainingTime = totalTime;
  updateTimerDisplay(remainingTime);
}

// Event listeners
startButton.addEventListener('click', toggleTimer);
pauseButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize display
updateTimerDisplay(remainingTime);

// Music control elements
const music = document.getElementById('lofiAudio');
const musicPlayPause = document.getElementById('musicPlayPause');
const musicMute = document.getElementById('musicMute');
const musicVolume = document.getElementById('musicVolume');

// Play/Pause toggle
musicPlayPause.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicPlayPause.textContent = '⏸️';
  } else {
    music.pause();
    musicPlayPause.textContent = '▶️';
  }
});

// Mute/Unmute toggle
musicMute.addEventListener('click', () => {
  music.muted = !music.muted;
  musicMute.textContent = music.muted ? '🔇' : '🔈';
});

// Volume control
musicVolume.addEventListener('input', () => {
  music.volume = musicVolume.value;
});

