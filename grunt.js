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
      "node_modules/requirejs/require.js",
      "dist/lib/require.js"
    );
    grunt.file.copy(
      "node_modules/euh.js/dist/euh.js",
      "dist/lib/euh.js"
    );
    grunt.file.copy(
      "components/jquery/jquery.js",
      "dist/lib/jquery.js"
    );
    grunt.file.copy(
      "node_modules/underscore/underscore.js",
      "dist/lib/underscore.js"
    );
    grunt.file.copy(
      "node_modules/backbone/backbone.js",
      "dist/lib/backbone.js"
    );
  }
);

/* Configure the default task. */
grunt.registerTask("default", "copy-lib exec");



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  };
