'use strict';
import * as path from 'path';
import ModBot from './lib/ModBot';
const config: any = require('./config.json');
const pkg: any = require('./package.json');

const bot: ModBot = new ModBot({ // tslint:disable-line
	name: 'YAMDBF Mod',
	token: config.token,
	config: config,
	version: pkg.version,
	statusText: 'Obey the law.',
	readyText: 'Ready\u0007',
	commandsDir: path.join(__dirname, 'commands'),
	disableBase: [
		'disablegroup',
		'enablegroup',
		'listgroups',
		'version',
		'reload'
	]
})
.removeDefaultSetting('disabledGroups')
.setDefaultSetting('prefix', '?')
.setDefaultSetting('cases', 0)
.start()
.on('disconnect', () => process.exit());
