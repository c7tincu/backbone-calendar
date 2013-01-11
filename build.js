(
  {
    /* Set the root path to use for all the modules. */
    "baseUrl" : "src/com",
    /* Set the paths to use for all the third-party modules. */
    "paths" :
      {
        /* euh.js. */
        "euh-js" : "../../node_modules/euh.js/dist/euh",
        /* jQuery. */
        "jquery" : "../../components/jquery/jquery",
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
            "deps" : [ "jquery", "underscore" ],
            "exports" : "Backbone"
          }
      },
    /* Exclude all the third-party modules from the build. */
    "exclude" :
      [
        "euh-js",
        "jquery",
        "underscore",
        "backbone"
      ],
    /* Set the output file name. */
    "out" : "dist/backbone-calendar.min.js",
    /* Set the component module name. */
    "name" : "backbone-calendar"
  }
)
