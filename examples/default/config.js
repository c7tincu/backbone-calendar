/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Configure RequireJS. */
requirejs.config(
  {
    /* Set the paths to use for all the third-party modules. */
    "paths" :
      {
        /* RequireJS i18n! plugin. */
        "i18n" : "../../dist/lib/require-i18n",
        /* JSON 2. */
        "json2" : "../../dist/lib/json2",
        /* jQuery. */
        "jquery" : "../../dist/lib/jquery",
        /* Underscore.js & Backbone.js. */
        "underscore" : "../../dist/lib/underscore",
        "backbone" : "../../dist/lib/backbone",
        /* backbone-calendar. */
        "backbone-calendar" : "../../dist/backbone-calendar.min"
      },
    /* Shim all the non-AMD-compliant modules. */
    "shim" :
      {
        /* JSON 2. */
        "json2" :
          {
            "exports" : "JSON"
          },
        /* Underscore.js & Backbone.js. */
        "underscore" :
          {
            "exports" : "_"
          },
        "backbone" :
          {
            "deps" : [ "json2", "jquery", "underscore" ],
            "exports" : "Backbone"
          }
      },
    /* Start the app. */
    "deps" : [ "main" ]
  }
);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
