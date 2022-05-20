const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('commonAPI', {
  showNotification: (message) => ipcRenderer.send('show-noti', message)
})