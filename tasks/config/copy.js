/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [
                {
                    expand: true,
                    cwd: './node_modules/bootstrap-material-design/node_modules/bootstrap/dist/css',
                    src: ['*.min.css'],
                    dest: '.tmp/public/bootstrap/css'
                },
                {
                    expand: true,
                    cwd: './node_modules/bootstrap-material-design/node_modules/bootstrap/dist/js',
                    src: ['bootstrap.min.js'],
                    dest: '.tmp/public/bootstrap/js'
                },
                {
                    expand: true,
                    cwd: './node_modules/bootstrap-material-design/node_modules/bootstrap/dist/fonts',
                    src: ['*'],
                    dest: '.tmp/public/bootstrap/fonts'
                },
                {
                    expand: true,
                    cwd: './node_modules/bootstrap-material-design/dist',
                    src: ['**/*.min.*'],
                    dest: '.tmp/public/material'
                },
                {
                    expand: true,
                    cwd: './assets',
                    src: ['**/*.!(coffee|less)'],
                    dest: '.tmp/public'
			     }]
		},
		build: {
			files: [
                {
                    expand: true,
                    cwd: '.tmp/public',
                    src: ['**/*'],
                    dest: 'www'
                }]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
