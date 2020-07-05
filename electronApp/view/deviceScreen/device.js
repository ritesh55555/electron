
const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

// accessing the buttons of device page
const addButton = document.getElementById('add');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click' , goToResourceScreen );
addButton.addEventListener('click' , addDevice );

//handling add device button function
function addDevice(){

    let addWindow = new BrowserWindow({
      width: 300 ,
      height:200 ,
      title : 'Add device type' ,
      webPreferences:{ nodeIntegration : true}
    });
    addWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'addDevice.html'),
      protocol: 'file:',
      slashes: true
    }));
    addWindow.on('closed', () => {
      addWindow = null ;
    });
  
  }

//handling next button click to view resource screen
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