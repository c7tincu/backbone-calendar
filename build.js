(
  {
    /* Set the root path to use for all the modules. */
    "baseUrl" : "src/com",
    /* Set the paths to use for all the third-party modules. */
    "paths" :
      {
        /* RequireJS i18n! & text! plugins. */
        "i18n" : "../../components/requirejs-i18n/i18n",
        "text" : "../../components/requirejs-text/text",
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
    /* Exclude all the third-party modules from the build. */
    "exclude" :
      [
        "i18n",
        "text",
        "euh-js",
        "json2",
        "jquery",
        "underscore",
        "backbone"
      ],
    /* Set the output file name. */
    "out" : "dist/backbone-calendar.log.js",
    /* Set the component module name. */
    "name" : "backbone-calendar"
  }
)
