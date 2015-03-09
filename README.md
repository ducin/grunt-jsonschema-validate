# grunt-jsonschema-validate

> Grunt task validating JSON files against JSON schema

<p/>
<img src="https://nodei.co/npm/grunt-jsonschema-validate.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/tkoomzaaskz/grunt-jsonschema-validate.png" alt=""/>

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsonschema-validate --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsonschema-validate');
```

## usage

    grunt.initConfig({
      'jsonschema-validate': {
        config: {
          options: {
            validateFormatsStrict: true
          },
          files: {
            'schema/config.json': ['config/*.json']
          }
        }
      }
    });
