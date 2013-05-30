module.exports =
  function (grunt) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Load the tasks. */
grunt.loadNpmTasks("grunt-exec");
grunt.loadNpmTasks("grunt-strip");
grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-less");

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
            /* Quick-and-dirty logging removal (part 2/2). */
            "command" :
              /* Remove all the lines containing `var ø`. */
              "sed -i \"/var ø/ d\" dist/backbone-calendar.js; " +
              /* Remove all the occurences of `,'euh-js'`. */
              "sed -i \"s/,'euh-js'//g\" dist/backbone-calendar.js"
          }
      },
    "strip" :
      {
        "main" :
          /* Quick-and-dirty logging removal (part 1/2). */
          {
            "src" : "dist/backbone-calendar.js",
            "options" :
              {
                "inline" : true,
                "nodes" : [ "ø" ]
              }
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
      },
    "less" :
      {
        "development" :
          {
            /* Compile LESS to CSS, and compress CSS, but keep it readable. */
            "options" : { "compress" : true },
            "files" :
              {
                "dist/backbone-calendar.css" : "src/style.less"
              }
          },
        "production" :
          {
            /* Compile LESS to CSS, and compress CSS. */
            "options" : { "yuicompress" : true },
            "files" :
              {
                "dist/backbone-calendar.min.css" : "src/style.less"
              }
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
      "components/tau.js/dist/tau.js",
      "dist/lib/tau.js"
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
    grunt.file.copy(
      "components/normalize-css/normalize.css",
      "dist/lib/normalize.css"
    );
  }
);

/* Configure the default task. */
grunt.registerTask(
  "default",
  [
    "copy-lib",
    "exec:build",
    "strip",
    "exec:strip",
    "uglify",
    "less:development",
    "less:production"
  ]
);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  };
