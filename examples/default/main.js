/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    require("backbone-calendar");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Create and render the component. */
new Backbone.Calendar(
  {
    "el" : $("#placeholder"),
    "header" :
      {
        "left" : [ "agendaDay", "agendaWeek", "month", "year", "timeline" ],
        "center" : [ "title" ],
        "right" : [ "now", "sep", "prev", "next" ]
      },
    "defaultView" : "month"
  }
).render();



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
