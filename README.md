# grunt-jsonschema-validate v0.1.1 [![Build Status: Linux](https://travis-ci.org/tkoomzaaskz/grunt-jsonschema-validate.svg?branch=master)](https://travis-ci.org/tkoomzaaskz/grunt-jsonschema-validate)

> Grunt task validating JSON files against JSON schema



## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsonschema-validate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsonschema-validate');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-coffee/tree/grunt-0.3-stable).*


## Jsonschema-validate task
_Run this task with the `grunt jsonschema-validate` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

<p/>
<img src="https://nodei.co/npm/grunt-jsonschema-validate.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/tkoomzaaskz/grunt-jsonschema-validate.png" alt=""/>

### Options

#### valid
Type: `Boolean`
Required

If true, then JSON files should conform to the schema. If false, they the
validation shall fail.

#### jsonschemaOptions
Type: `object`

These options are passed as-is to `jsonschema` tool, which this grunt plugin is
built on top of.

### basic example

    grunt.initConfig({
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
        }
    });


## Release History

 * 2015-03-10   v0.1.1   Improved docs. Automatic tests added. Grunt-contrib-internal standard used to build.
 * 2015-03-08   v0.1.0   Fully working JSON schema validation. First official release.

---

Task submitted by [Tomasz Ducin](http://ducin.it)

*This file was generated on Wed Mar 11 2015 00:19:57.*
