'use strict'

// Import modules
const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// Load environmental variables
require('dotenv').load();

process.env.ELECTRON = true;

if (process.env.NODE_ENV === "development") {
    const hotReloadServer = require('hot-reload-server').default;
    const webpackConfig = require('../config/webpack.config.electron');

    hotReloadServer(webpackConfig, {
        publicPath: 'assets/'
    }).start();
}

// Create a variable to hold the window
let mainWindow = null;

function createWindow () {
    // creates a new browser window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        title: process.env.PROJECT,
        webPreferences: {
            devTools: process.env.NODE_ENV === "development" ? true : false
        }
    });

    // Open the DevTools.
    if (process.env.NODE_ENV === "development") {
        mainWindow.webContents.openDevTools();
    }

    // load the file
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // no menu
    mainWindow.setMenuBarVisibility(false);

    // Register window events
    mainWindow.on('closed', function() {
        mainWindow = null
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
