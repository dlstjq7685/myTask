const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

app.setAppUserModelId("myTask")

ipcMain.on('notify', () => {
  let myNotification = new Notification({
      appName: "Electron",
      title:'title',
      body: 'Lorem Ipsum Dolor Sit Amet'
    },
    function(err, response) {
      // Response is response from notification
      console.log("responded...");
    }
  )
})

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
