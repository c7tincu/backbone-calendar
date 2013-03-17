
define('text!ejs/head.ejs',[],function () { return '<div class="bc-left js-bc-left"></div>\n<div class="bc-center js-bc-center"></div>\n<div class="bc-right js-bc-right"></div>\n';});

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
define('views/head',['require','exports','module','euh-js','backbone','text!ejs/head.ejs','i18n!nls/i18n'],
  function (require, exports, module) {
    

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

define('text!ejs/backbone-calendar.ejs',[],function () { return '<div class="bc-head js-bc-head"></div>\n<div class="bc-body js-bc-body"></div>\n<div class="bc-foot js-bc-foot"></div>\n';});

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('defaults',['require','exports','module'],
  function (require, exports, module) {
    

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;

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
define('backbone-calendar',['require','exports','module','euh-js','backbone','views/head','text!ejs/backbone-calendar.ejs','i18n!nls/i18n','defaults'],
  function (require, exports, module) {
    

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
