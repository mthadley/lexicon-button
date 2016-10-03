'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'button.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'lexicon-button',
		soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
