'use strict';

/**
 * grunt-jsonschema-validate is a Grunt plugin validating JSON files against JSON schema
 *
 * @see https://github.com/tkoomzaaskz/grunt-jsonschema-validate
 *
 * @author Tomasz Ducin <tomasz.ducin@gmail.com> (https://github.com/tkoomzaaskz)
 * @copyright © 2015 Tomasz Ducin
 * @license MIT https://raw.github.com/tkoomzaaskz/grunt-jsonschema-validate/master/LICENSE
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('jsonschema-validate', 'Your task description goes here.', function() {
    var v = require('jsonschema').validate;
    var options = this.options();

    this.files.forEach(function(file) {
      if (!grunt.file.exists(file.dest)) {
        grunt.log.error('Schema file ' + file.dest + ' does not exist');
        return;
      }
      console.log(v("4", {"type": "number"}));

      grunt.log.subhead('Appling schema ' + file.dest);
      var schema = grunt.file.readJSON(file.dest);
      file.src.forEach(function(src) {
        var input = grunt.file.readJSON(src);
        var result = v(input, schema);
        if (result.errors.length) {
          grunt.log.subhead('Errors in ' + src);
          result.errors.forEach(function(error) {
            grunt.log.errorlns(error.property + ' ' + error.message);
          });
        } else {
          grunt.log.oklns(src);
        }
      });
    });

    if (this.errorCount) {
      return false;
    }

    grunt.log.ok();
  });
};
