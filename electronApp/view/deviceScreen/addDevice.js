const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const nextButton = document.getElementById('next');

nextButton.addEventListener('click' , goToResourceScreen );

function goToResourceScreen(){
    let resourceWindow = new BrowserWindow({width: 800, height: 600 , webPreferences:{ nodeIntegration : true}})
  
    resourceWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../resourceScreen/newDeviceResource.html'),
      protocol: 'file:',
      slashes: true
    }));
    resourceWindow.on('closed', () => {
      resourceWindow = null ;
    });
  }