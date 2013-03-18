
define('nls/i18n',
  {
    "root" :
      {
        "head" :
          {
            "now" : "Now",
            "prev" : "Prev",
            "next" : "Next"
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
        "left" : "title",
        "center" : "",
        "right" : "now prev,next"
      }
  };

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('backbone-calendar',['require','exports','module','backbone','views/head','i18n!nls/i18n','defaults'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Backbone = require("backbone");
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
