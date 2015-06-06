/**
 * grunt-jsonschema-validate is a Grunt plugin validating JSON files against JSON schema
 *
 * @see https://github.com/ducin/grunt-jsonschema-validate
 *
 * @author Tomasz Ducin <tomasz.ducin@gmail.com> (https://github.com/ducin)
 * @copyright © 2015 Tomasz Ducin
 * @license MIT https://raw.github.com/ducin/grunt-jsonschema-validate/master/LICENSE
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('jsonschema_validate', 'Performs JSON schema validation of your JSON files, according to given schema.', function() {
    var validate = require('jsonschema').validate,
        options = this.options(),
        jsonschemaOptions = options.jsonschemaOptions || {};

    this.files.forEach(function(file) {
      if (!grunt.file.exists(file.dest)) {
        grunt.fail.warn('Schema file ' + file.dest + ' does not exist');
      }
      var schema = grunt.file.readJSON(file.dest);

      if (options.valid) {
        grunt.log.subhead('Applying schema ' + file.dest + ' to valid files:');
        file.src.forEach(function(src) {
          var input = grunt.file.readJSON(src);
          var result = validate(input, schema, jsonschemaOptions);
          if (result.errors.length) {
            grunt.log.subhead('Errors in ' + src);
            result.errors.forEach(function(error) {
              grunt.log.error(error.property + ' ' + error.message);
              grunt.verbose.writeln(error.property + ' is ' + JSON.stringify(error.instance, null, 2));
              grunt.verbose.writeln('schema is ' + JSON.stringify(error.schema, null, 2));
              grunt.verbose.writeln();
            });
          } else {
            grunt.log.ok(src);
          }
        });
      } else {
        grunt.log.subhead('Applying schema ' + file.dest + ' to invalid files:');
        file.src.forEach(function(src) {
          var input = grunt.file.readJSON(src);
          var result = validate(input, schema, jsonschemaOptions);
          if (result.errors.length) {
            grunt.log.ok(src);
            result.errors.forEach(function(error) {
              grunt.verbose.writeln(error.property + ' ' + error.message);
              grunt.verbose.writeln(error.property + ' is ' + JSON.stringify(error.instance, null, 2));
              grunt.verbose.writeln('schema is ' + JSON.stringify(error.schema, null, 2));
              grunt.verbose.writeln();
            });
          } else {
            grunt.fail.warn('No errors found in ' + src);
          }
        });
      }
    });

    if (this.errorCount) {
      grunt.log.error(this.errorCount + ' errors found.');
      return false;
    }
    grunt.log.ok();
  });
};
