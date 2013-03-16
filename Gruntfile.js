module.exports =
  function (grunt) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Load the grunt-exec plugin. */
grunt.loadNpmTasks("grunt-exec");

/* Configure grunt-exec with the RequireJS optimization tool. */
grunt.initConfig(
  {
    "exec" :
      {
        "build" :
          {
            /* Pass `optimize=none` in order to skip uglification. */
            "command" : "node node_modules/requirejs/bin/r.js -o build.js"
          }
      }
  }
);

/* Copy all the third-party modules to `dist/lib`, for convenience. */
grunt.registerTask(
  "copy-lib",
  function () {
    grunt.file.copy(
      "components/requirejs/require.js",
      "dist/lib/require.js"
    );
    grunt.file.copy(
      "components/euh.js/dist/euh.js",
      "dist/lib/euh.js"
    );
    grunt.file.copy(
      "components/json2/json2.js",
      "dist/lib/json2.js"
    );
    grunt.file.copy(
      "components/jquery/jquery.js",
      "dist/lib/jquery.js"
    );
    grunt.file.copy(
      "components/underscore/underscore.js",
      "dist/lib/underscore.js"
    );
    grunt.file.copy(
      "components/backbone/backbone.js",
      "dist/lib/backbone.js"
    );
  }
);

/* Configure the default task. */
grunt.registerTask("default", [ "copy-lib", "exec" ]);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  };
