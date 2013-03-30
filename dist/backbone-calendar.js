
/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('models/main',['require','exports','module','backbone'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Backbone = require("backbone");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;

initializeImpl =
  /* Invoked when the model is created. */
  function (attr, opt) {
    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.Model.extend(
    {
      "initialize" : initializeImpl
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);

define('nls/i18n',
  {
    "root" :
      {
        "head" :
          {
            "now" : "Now",
            "prev" : "◂",
            "next" : "▸"
          },
        "views" :
          {
            "day" :
              {
                "title" : "Day"
              },
            "agendaDay" :
              {
                "title" : "Day"
              },
            "week" :
              {
                "title" : "Week"
              },
            "agendaWeek" :
              {
                "title" : "Week"
              },
            "month" :
              {
                "title" : "Month"
              },
            "year" :
              {
                "title" : "Year"
              },
            "timeline" :
              {
                "title" : "Timeline"
              }
          }
      }
  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/head',['require','exports','module','backbone','i18n!nls/i18n'],
  function (require, exports, module) {
    

    /* Require the deps. */
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
    0;
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
    0;
    _.each(
      [ "left", "center", "right" ],
      function (value) {
        var $value;
        var i;
        var l;
        var text;

        this.$el.append(
          $("<div>")
            .addClass("bc-" + value + " js-bc-" + value)
        );
        $value = this.$el.find(".js-bc-" + value);
        for (i = 0, l = this.config[value].length; i < l; ++ i) {
          text = this.config[value][i];
          switch (text) {
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
            case "sep" :
              $value.append(
                $("<span>")
                  .addClass("bc-sep js-bc-sep")
              );
              break;
          }
          if (_.has(i18n.views, text)) {
            $value.append(
              $("<button>")
                .addClass(
                  "bc-" + text + " js-bc-" + text +
                  (
                    this.model.get("currentView") === text ?
                    " bc-selected js-bc-selected" :
                    ""
                  )
                )
                .html(i18n.views[text].title)
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
    0;
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
      "config" : {},
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

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('defaults',['require','exports','module'],
  function (require, exports, module) {
    

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  {
    "header" :
      {
        "left" : [ "title" ],
        "center" : [],
        "right" : [ "now", "sep", "prev", "next" ]
      },
    "defaultView" : "month"
  };

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('backbone-calendar',['require','exports','module','backbone','models/main','views/head','i18n!nls/i18n','defaults'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Backbone = require("backbone");
    var MainModel = require("models/main");
    var HeadView = require("views/head");
    var i18n = require("i18n!nls/i18n");
    var defaults = require("defaults");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;
var events;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
    opt || (opt = {});
    this.model =
      new MainModel(
        {
          "currentView" : opt.defaultView || defaults.defaultView
        }
      );
    if (opt.header !== false) {
      this.config.header = opt.header || defaults.header;
    }
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    this.$el
      .addClass("bc js-bc")
      .append(
        $("<div>")
          .addClass("bc-head js-bc-head")
      )
      .append(
        $("<div>")
          .addClass("bc-body js-bc-body")
      )
      .append(
        $("<div>")
          .addClass("bc-foot js-bc-foot")
      );
    if (this.config.header) {
      this.headView = new HeadView(
        _.extend(
          this.config.header,
          {
            "el" : this.$el.find(".js-bc-head"),
            "model" : this.model
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
    0;
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
      "config" : {},
      "model" : null,
      "headView" : null,
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
