const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            webviewTag: true
        }
    });

    win.loadFile('wm/desktop.html')
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'win32') app.quit();
    if (process.platform !== 'darwin') app.quit();
})