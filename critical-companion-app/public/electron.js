const { app, BrowserWindow } = require('electron');
const path = require('path');

let isDev;

import('electron-is-dev').then((module) => {
  isDev = module.default;
});

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  const startUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);
