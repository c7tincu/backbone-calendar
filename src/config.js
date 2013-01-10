/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Configure RequireJS. */
requirejs.config(
  {
    /* Set the root path to use for all the modules. */
    "baseUrl" : "src/com",
    /* Set the paths to use for all the third-party modules. */
    "paths" :
      {
        /* euh.js. */
        "euh-js" : "../../node_modules/euh.js/dist/euh",
        /* Underscore.js & Backbone.js. */
        "underscore" : "../../node_modules/underscore/underscore",
        "backbone" : "../../node_modules/backbone/backbone"
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
    /* Start the dev environment. */
    "deps" : [ "../main" ]
  }
);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
