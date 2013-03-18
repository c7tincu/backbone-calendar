module.exports =
  function (grunt) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Load the tasks. */
grunt.loadNpmTasks("grunt-exec");
grunt.loadNpmTasks("grunt-contrib-uglify");

/* Configure the tasks. */
grunt.initConfig(
  {
    "exec" :
      {
        "build" :
          {
            /* Run the RequireJS optimizer. */
            "command" :
              /* Pass `optimize=none` in order to skip uglification.
                 Logging removal on uglified code is probably not possible. */
              "node node_modules/requirejs/bin/r.js -o build.js optimize=none"
          },
        "strip" :
          {
            /* Quick and dirty logging removal. */
            "command" :
              /* Remove all the lines containing `ø`. */
              "sed -i \"/ø/ d\" dist/backbone-calendar.js; " +
              /* Remove all the occurences of `,'euh-js'`. */
              "sed -i \"s/,'euh-js'//g\" dist/backbone-calendar.js"
          }
      },
    "uglify" :
      {
        "build" :
          {
            /* Generate source maps, and uglify code. */
            "options" :
              {
                "sourceMap" : "dist/backbone-calendar.map.js",
                "sourceMappingURL" : "backbone-calendar.map.js",
                "sourceMapRoot" : ".."
              },
            "src" : [ "dist/backbone-calendar.js" ],
            "dest" : "dist/backbone-calendar.min.js"
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
      "components/requirejs-i18n/i18n.js",
      "dist/lib/require-i18n.js"
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
grunt.registerTask(
  "default",
  [
    "copy-lib",
    "exec",
    "uglify"
  ]
);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  };
