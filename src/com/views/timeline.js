/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    var ø = require("euh-js");
    var Backbone = require("backbone");
    var i18n = require("i18n!nls/i18n");
    var τ = require("tau");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;
var events;
var formatTitleImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    ø.pil("TimelineView.initialize() >>> ", opt);
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
  };

renderImpl =
  /* Renders the view. */
  function () {
    ø.pil("TimelineView.render() >>>");
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    ø.pil("TimelineView.remove() >>> ", jqEvent);
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

formatTitleImpl =
  function (dstr) {
    var fullYear = τ.dstrFullYear(dstr);
    var month = τ.dstrMonth(dstr);
    var endDstr = τ.addMonthsToDstr(dstr, this.config.length - 1);
    var endFullYear = τ.dstrFullYear(endDstr);
    var endMonth = τ.dstrMonth(endDstr);

    ø.pil("TimelineView.formatTitle() >>> ", dstr);
    return (
      i18n.monthNames[month] + " " +
      (fullYear === endFullYear ? "" : fullYear + " ") +
      "&ndash; " +
      i18n.monthNames[endMonth] + " " +
      endFullYear
    );
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.View.extend(
    {
      "config" :
        {
          /* Length of the timeline, in months. */
          "length" : 3
        },
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl,
      "events" : events,
      "formatTitle" : formatTitleImpl
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
