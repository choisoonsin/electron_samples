const { BrowserWindow, app, Notification, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    // webPreferences: {
    //   nodeIntegration: true,
    //   contextIsolation: false,
    // }
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
}

ipcMain.on('show-noti', (_event, message) => {
  new Notification({
    title: 'Notification',
    body: message
  }).show()
})

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if ( process.platform !== 'darwin' ) {
    app.quit()
  }
})