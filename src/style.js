/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    var ø = require("euh-js");
    var less = require("less");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var append;
var compile;
var loadImpl;

append =
  /* Appends CSS text to the DOM as `<style>` elements. */
  function (cssText, id) {
    var $style = document.createElement("style");

    $style.id = id;
    document.getElementsByTagName("head")[0].appendChild($style);
    /* The IE 6–8 way. */
    if ($style.styleSheet) {
      $style.styleSheet.cssText = cssText;
    }
    /* The common way. */
    else {
      $style.appendChild(document.createTextNode(cssText));
    }
  };

compile =
  /* Compiles LESS text to CSS text, asynchronously. */
  function (lessText, id, name, appendCallback) {
    (
      new less.Parser(
        {
          "filename" : name
        }
      )
    ).parse(
      lessText,
      function (err, css) {
        if (err) {
          ø.omg("Error parsing LESS: ", err);
        }
        else {
          /* Pass the CSS text and the ID to the append callback. */
          appendCallback(css.toCSS(), id);
        }
      }
    );
  };

loadImpl =
  /* Loads CSS/LESS styles, asynchronously. */
  function (name, req, load, config) {
    /* Guess if the file contains a CSS or a LESS style,
       by looking at its extension. */
    var split = name.split(".");
    var extension = split[split.length - 1].toLowerCase();

    req(
      /* Require the file as text. */
      [ "text!" + name ],
      function (text) {
        /* Prepend an `"s-"` prefix to `name`, and use it
           as the DOM `<style>` element ID. */
        var id = "s-" + name;

        /* Tell RequireJS that the plugin is done loading the file. */
        load(name);
        if (extension === "less") {
          compile(text, id, name, append);
        }
        else {
          append(text, id);
        }
      }
    );
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  {
    "load" : loadImpl
  };

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
