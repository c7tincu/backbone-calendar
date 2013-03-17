/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    var ø = require("euh-js");
    var Backbone = require("backbone");
    var HeadView = require("views/head");
    var backboneCalendarEjs = require("text!ejs/backbone-calendar.ejs");
    var i18n = require("i18n!nls/i18n");
    var defaults = require("defaults");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var compiledBackboneCalendarEjs = _.template(backboneCalendarEjs);
var initializeImpl;
var renderImpl;
var removeImpl;
var events;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    ø.pil("Backbone.Calendar.initialize() >>> ", opt);
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
    opt || (opt = {});
    if (opt.header !== false) {
      this.optHeader = opt.header || defaults.header
    }
  };

renderImpl =
  /* Renders the view. */
  function () {
    ø.pil("Backbone.Calendar.render() >>>");
    this.$el
      .addClass("bc js-bc")
      .html(
        compiledBackboneCalendarEjs(
          {
            "model" : this.model,
            "i18n" : i18n
          }
        )
      );
    if (this.optHeader) {
      this.headView = new HeadView(
        _.extend(
          this.optHeader,
          {
            "el" : this.$el.find(".js-bc-head")
          }
        )
      ).render();
    }
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    ø.pil("Backbone.Calendar.remove() >>> ", jqEvent);
    this.headView && this.headView.remove();
    this.$el.html("").removeClass("bc js-bc");
    /* Prevent default event handling on buttons, anchors, etc. */
    jqEvent && jqEvent.preventDefault();
    /* Unbind all the events. */
    this.undelegateEvents();
    /* Stop listening to outside events. */
    this.stopListening();
    /* Return `this` for chained calls. */
    return this;
  };

events =
  {
    /* … */
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.View.extend(
    {
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl,
      "events" : events
    }
  );

Backbone.Calendar = api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
