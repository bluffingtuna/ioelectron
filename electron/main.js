const electron = require('electron')
    // Module to control application life.
const app = electron.app
    // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const request = require("request")
const cheerio = require("cheerio")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 800, height: 600 })

    var socket = require('socket.io-client')('http://localhost:3001');
    socket.on('connect', function() {
      socket.emit('server custom event', { my: 'data' })
    });
    socket.on('event', function(data) {});
    socket.on('disconnect', function() {});

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    // var pageurl = 'https://www.slickdeals.net';
    // request(pageurl, function(error, response, html) {
    //     //We load that into cheerio and save it to $ for a shorthand selector
    //     var $ = cheerio.load(html);
    //     var result = {
    //         pageurl: pageurl,
    //         title: null,
    //         links: [],
    //         searchables: []
    //     };
    //     $("title").each(function(i, element) {
    //         result.title = $(this).text();
    //         //using our Article model, create a new entry
    //         //This effectively passes the result object to the entry
    //     });
    //     $('a').each(function(i, element) {
    //         result.links.push($(this).attr('href'));
    //     });
    //     console.log(JSON.stringify(result, null, 3))
    // })

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
