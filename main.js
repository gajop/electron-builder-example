const { app, BrowserWindow } = require('electron');

app.prependListener('ready', () => {
	let mainWindow = new BrowserWindow();
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});
});

