// Script for loding a new electron window
const { app, BrowserWindow, Menu } = require("electron");

let win;

function loadWindow() {
  win = new BrowserWindow({
    width: 1418,
    height: 760,
    minWidth: 1064,

    webPreferences: {
      nodeIntegration: true
    }
  });

  win.setMenuBarVisibility(false);
  // win.loadFile(`dist/newsify/index.html`);  // For loading build
  win.loadURL(`http://localhost:4200`); // For loading live server

  // Open the DevTools.
  // win.webContents.openDevTools();

  win.on("closed", function() {
    win = null;
  });
}

app.on("ready", loadWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (win === null) {
    loadWindow();
  }
});
