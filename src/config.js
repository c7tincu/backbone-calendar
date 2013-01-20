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
        "euh-js" : "../../components/euh.js/dist/euh",
        /* JSON 2. */
        "json2" : "../../components/json2/json2",
        /* jQuery. */
        "jquery" : "../../components/jquery/jquery",
        /* Underscore.js & Backbone.js. */
        "underscore" : "../../components/underscore/underscore",
        "backbone" : "../../components/backbone/backbone"
      },
    /* Shim all the non-AMD-compliant modules. */
    "shim" :
      {
        /* euh.js. */
        "euh-js" :
          {
            "exports" : "ø"
          },
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
    /* Start the dev environment. */
    "deps" : [ "../main" ]
  }
);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
