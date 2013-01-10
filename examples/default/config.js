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
        /* euh.js. */
        "euh-js" : "../../dist/lib/euh",
        /* Underscore.js & Backbone.js. */
        "underscore" : "../../dist/lib/underscore",
        "backbone" : "../../dist/lib/backbone",
        /* backbone-calendar. */
        "backbone-calendar" : "../../dist/backbone-calendar.min"
      },
    /* Shim all the non-AMD-compliant modules. */
    "shim" :
      {
        /* euh.js. */
        "euh-js" :
          {
            "exports" : "ø"
          },
        /* Underscore.js & Backbone.js. */
        "underscore" :
          {
            "exports" : "_"
          },
        "backbone" :
          {
            "deps" : [ "underscore" ],
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
