const {app, BrowserWindow} = require('electron');
const path = require('path');
const process = require('process');

const isDev = !process.defaultApp;


function createWindow() {
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        worldSafeExecuteJavaScript: true,
        contextIsolation: true,
      },
    });
    win.loadFile("index.html");
}

if(isDev){
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

app.whenReady().then(createWindow)
process.env.GOOGLE_API_KEY = 'AIzaSyAkdRSmW-6OX4itnpaORHde0GcYlKNL6VA'