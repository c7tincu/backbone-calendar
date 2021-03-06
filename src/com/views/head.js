/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

    /* Require the deps. */
    var ø = require("euh-js");
    var Backbone = require("backbone");
    var BasicDayView = require("views/basic-day");
    var AgendaDayView = require("views/agenda-day");
    var BasicWeekView = require("views/basic-week");
    var AgendaWeekView = require("views/agenda-week");
    var MonthView = require("views/month");
    var YearView = require("views/year");
    var TimelineView = require("views/timeline");
    var i18n = require("i18n!nls/i18n");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;
var onModelChangeCurrentViewImpl;
var onClickButtonImpl;
var events;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    ø.pil("HeadView.initialize() >>> ", opt);
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
    opt || (opt = {});
    _.each(
      [ "left", "center", "right" ],
      function (value) {
        this.config[value] = opt[value];
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
        var $children;

        this.$el.append(
          $("<div>")
            .addClass("bc-" + value + " js-bc-" + value)
        );
        $value = this.$el.find(".js-bc-" + value);
        _.each(
          this.config[value],
          function (text) {
            switch (text) {
              case "title" :
                $value.append(
                  $("<span>")
                    .addClass("bc-title js-bc-title")
                    .html(
                      this.config
                        .viewNameToClass[this.model.get("currentView")]
                        .prototype.formatTitle(this.model.get("currentTau"))
                    )
                );
                break;
              case "now" :
                $value.append(
                  $("<button>")
                    .addClass("bc-button bc-now js-bc-now")
                    .html(i18n.head.now)
                );
                break;
              case "prev" :
                $value.append(
                  $("<button>")
                    .addClass("bc-button bc-prev js-bc-prev")
                    .html(i18n.head.prev)
                );
                break;
              case "next" :
                $value.append(
                  $("<button>")
                    .addClass("bc-button bc-next js-bc-next")
                    .html(i18n.head.next)
                );
                break;
              case "sep" :
                $value.append(
                  $("<span>")
                    .addClass("bc-sep js-bc-sep")
                );
                break;
            }
            /* Append view buttons. */
            if (_.has(i18n.views, text)) {
              $value.append(
                $("<button>")
                  .addClass(
                    "bc-button bc-" + text + " js-bc-" + text +
                    (
                      this.model.get("currentView") === text ?
                      " bc-st-selected js-bc-st-selected" :
                      ""
                    )
                  )
                  .html(i18n.views[text].title)
              );
            }
          },
          this
        );
        /* Adjust view buttons’ style. */
        $children = $value.find("span, button");
        $children.length > 1 &&
        _.each(
          $children,
          function (child) {
            var $child = $(child);

            if ($child.is("button")) {
              if ($child.prev().is("button")) {
                $child.addClass("bc-st-adjacent-left");
              }
              if ($child.next().is("button")) {
                $child.addClass("bc-st-adjacent-right");
              }
            }
          }
        );
      },
      this
    );
    /* Start listening to outside events. */
    this.listenTo(
      this.model,
      "change:currentView",
      this.onModelChangeCurrentView
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

onModelChangeCurrentViewImpl =
  function (model, value, opt) {
    ø.pil("HeadView.onModelChangeCurrentView() >>> ", model, value, opt);
    this.$el.find(".js-bc-st-selected")
      .removeClass("bc-st-selected js-bc-st-selected");
    this.$el.find(".js-bc-" + value)
      .addClass("bc-st-selected js-bc-st-selected");
  };

onClickButtonImpl =
  function (jqEvent) {
    var $target = $(jqEvent.target);

    ø.pil("HeadView.onClickButton() >>> ", jqEvent);
    if (! $target.hasClass("js-bc-st-selected")) {
      if ($target.hasClass("js-bc-now")) {
        /* … */
      }
      else
      if ($target.hasClass("js-bc-prev")) {
        /* … */
      }
      else
      if ($target.hasClass("js-bc-next")) {
        /* … */
      }
      else {
        _.each(
          _.keys(i18n.views),
          function (value) {
            if ($target.hasClass("js-bc-" + value)) {
              this.model.set(
                {
                  "currentView" : value
                }
              );
            }
          },
          this
        );
      }
    }
  };

events =
  {
    "click button" : "onClickButton"
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.View.extend(
    {
      "config" :
        {
          "viewNameToClass" :
            {
              "day" : BasicDayView,
              "agendaDay" : AgendaDayView,
              "week" : BasicWeekView,
              "agendaWeek" : AgendaWeekView,
              "month" : MonthView,
              "year" : YearView,
              "timeline" : TimelineView
            }
        },
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl,
      "onModelChangeCurrentView" : onModelChangeCurrentViewImpl,
      "onClickButton" : onClickButtonImpl,
      "events" : events
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
