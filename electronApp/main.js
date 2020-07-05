const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let mainWindow ;
let addWindow ;

// starting the app
app.on('ready', () => {

  mainWindow = new BrowserWindow({width: 800, height: 600 , webPreferences:{ nodeIntegration : true}})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'view/deviceScreen/device.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.on('closed', () => {
    app.quit() ;
  });

});


