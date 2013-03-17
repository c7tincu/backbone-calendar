/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    var ø = require("euh-js");
    var Backbone = require("backbone");
    var headEjs = require("text!ejs/head.ejs");
    var i18n = require("i18n!nls/i18n");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var compiledHeadEjs = _.template(headEjs);
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
    this.$el.html(
      compiledHeadEjs(
        {
          "model" : this.model,
          "i18n" : i18n
        }
      )
    );
    _.each(
      [ "left", "center", "right" ],
      function (value) {
        var htmlText = "";
        var i;
        var j;
        var li;
        var lj;

        for (i = 0, li = this[value].length; i < li; ++ i) {
          for (j = 0, lj = this[value][i].length; j < lj; ++ j) {
            switch (this[value][i][j]) {
              case "title" :
                htmlText += "<span class=\"bc-title js-bc-title\">…</span>";
                break;
              case "now" :
                htmlText +=
                  "<button class=\"bc-now js-bc-now\">" +
                  i18n.head.now +
                  "</button>";
                break;
              case "prev" :
                htmlText +=
                  "<button class=\"bc-prev js-bc-prev\">" +
                  i18n.head.prev +
                  "</button>";
                break;
              case "next" :
                htmlText +=
                  "<button class=\"bc-next js-bc-next\">" +
                  i18n.head.next +
                  "</button>";
                break;
            }
          }
          if (i !== li - 1) {
            htmlText += "<span class=\"break js-break\"></span>";
          }
        }
        this.$el.find(".js-bc-" + value).html(htmlText);
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
