# basic example

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
