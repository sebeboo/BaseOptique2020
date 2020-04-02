const {app, BrowserWindow} = require('electron');
const path = require('path');


let pluginName
switch (process.platform) {
  case 'win32':
    pluginName = 'pepflashplayer64_28_0_0_161.dll'
    break
  case 'darwin':
    pluginName = 'PepperFlashPlayer.plugin'
    break
  case 'linux':
    pluginName = 'libpepflashplayer.so'
    break
}

app.commandLine.appendSwitch('ppapi-flash-path', path.join('./resources/app', pluginName))
app.commandLine.appendSwitch('ppapi-flash-version', '28.0.0.161');


let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 800,
      width: 1280,
      webPreferences: {'plugins': true}
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
})

app.on('window-all-closed', app.quit);
app.on('before-quit', () => {
    mainWindow.removeAllListeners('close');
    mainWindow.close();
    
});

 
  mainWindow.loadURL('file:///resources/app/index.html');
  //mainWindow.openDevTools();


  }

  

);


