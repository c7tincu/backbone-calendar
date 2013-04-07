/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    var ø = require("euh-js");
    var Backbone = require("backbone");
    var BasicView = require("views/basic");
    var i18n = require("i18n!nls/i18n");
    var τ = require("tau");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    ø.pil("BasicDayView.initialize() >>> ", opt);
    /* Call superclass method. */
    BasicView.prototype.initialize.call(this, opt);
  };

renderImpl =
  /* Renders the view. */
  function () {
    ø.pil("BasicDayView.render() >>>");
    /* Call superclass method. */
    return BasicView.prototype.render.call(this);
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    ø.pil("BasicDayView.remove() >>> ", jqEvent);
    /* Call superclass method. */
    return BasicView.prototype.remove.call(this, jqEvent);
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  BasicView.extend(
    {
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
