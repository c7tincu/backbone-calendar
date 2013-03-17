/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    var ø = require("euh-js");
    var Backbone = require("backbone");
    var i18n = require("i18n!nls/i18n");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;
var events;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    ø.pil("HeadView.initialize() >>> ", opt);
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
    /* Parse options. */
    _.each(
      [ "left", "center", "right" ],
      function (value) {
        this[value] =
          _.map(
            opt[value].split(" "),
            function (value) {
              return value.split(",");
            }
          );
      },
      this
    );
  };

renderImpl =
  /* Renders the view. */
  function () {
    ø.pil("HeadView.render() >>>");
    _.each(
      [ "left", "center", "right" ],
      function (value) {
        var $value;
        var i;
        var j;
        var li;
        var lj;

        this.$el.append(
          $("<div>")
            .addClass("bc-" + value + " js-bc-" + value)
        );
        $value = this.$el.find(".js-bc-" + value);
        for (i = 0, li = this[value].length; i < li; ++ i) {
          for (j = 0, lj = this[value][i].length; j < lj; ++ j) {
            switch (this[value][i][j]) {
              case "title" :
                $value.append(
                  $("<span>")
                    .addClass("bc-title js-bc-title")
                    .html("…")
                );
                break;
              case "now" :
                $value.append(
                  $("<button>")
                    .addClass("bc-now js-bc-now")
                    .html(i18n.head.now)
                );
                break;
              case "prev" :
                $value.append(
                  $("<button>")
                    .addClass("bc-prev js-bc-prev")
                    .html(i18n.head.prev)
                );
                break;
              case "next" :
                $value.append(
                  $("<button>")
                    .addClass("bc-next js-bc-next")
                    .html(i18n.head.next)
                );
                break;
            }
          }
          if (i !== li - 1) {
            $value.append(
              $("<span>")
                .addClass("bc-sep js-bc-sep")
            );
          }
        }
      },
      this
    );
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    ø.pil("HeadView.remove() >>> ", jqEvent);
    this.$el.html("");
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

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);