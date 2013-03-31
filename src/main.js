/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    require("backbone-calendar");
    require("style!style.less");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Create and render the components. */
new Backbone.Calendar(
  {
    "el" : $("#placeholder-1")
  }
).render();
new Backbone.Calendar(
  {
    "el" : $("#placeholder-2"),
    "header" :
      {
        "left" : [ "now" ],
        "center" : [ "prev", "title", "next" ],
        "right" : [ "agendaDay", "agendaWeek", "month" ]
      }
  }
).render();



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
