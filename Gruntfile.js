/*
 * grunt-jsonschema-validate
 * https://github.com/tkoomzaaskz/grunt-jsonschema-validate
 *
 * Copyright (c) 2015 Tomasz Ducin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
//                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            },
        },
        jsonschema_validate: {
            options: {
                valid: true,
                jsonschemaOptions: {
                    validateFormatsStrict: true
                }
            },
            pass: {
                files: {
                    'test/fixtures/arrays/schema.json': ['test/fixtures/arrays/valid/**/*.json']
                }
            },
            fail: {
                options: {
                    valid: false
                },
                files: {
                    'test/fixtures/arrays/schema.json': ['test/fixtures/arrays/invalid/**/*.json']
                }
            }
        },
//        // Unit tests.
//        nodeunit: {
//            tests: ['test/*_test.js'],
//        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-internal');

    // Whenever the 'test' task is run, first run jshint, then run this plugin's
    // task(s), then test the result.
    grunt.registerTask('test', ['jshint', 'jsonschema_validate'/*, 'nodeunit'*/]);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
};
