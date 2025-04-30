const { app, BrowserWindow } = require('electron');
const path = require('path');

app.disableHardwareAcceleration();

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    icon: path.join(__dirname, 'tomato.png'),
    webPreferences: {
      nodeIntegration: true,
    },
    resizable: false,
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});

