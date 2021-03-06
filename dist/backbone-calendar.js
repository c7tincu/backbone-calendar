
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
          },
        "monthNames" :
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
      }
  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/basic',['require','exports','module','backbone','i18n!nls/i18n'],
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
var formatTitleImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
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
  function (tau) {
    0;
    /* … */
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.View.extend(
    {
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

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/basic-day',['require','exports','module','backbone','views/basic','i18n!nls/i18n'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Backbone = require("backbone");
    var BasicView = require("views/basic");
    var i18n = require("i18n!nls/i18n");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Call superclass method. */
    BasicView.prototype.initialize.call(this, opt);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Call superclass method. */
    return BasicView.prototype.render.call(this);
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
    /* Call superclass method. */
    return BasicView.prototype.remove.call(this, jqEvent);
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  BasicView.extend(
    {
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/agenda',['require','exports','module','backbone','i18n!nls/i18n'],
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
var formatTitleImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
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
  function (tau) {
    0;
    /* … */
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.View.extend(
    {
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

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/agenda-day',['require','exports','module','backbone','views/agenda','i18n!nls/i18n'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Backbone = require("backbone");
    var AgendaView = require("views/agenda");
    var i18n = require("i18n!nls/i18n");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Call superclass method. */
    AgendaView.prototype.initialize.call(this, opt);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Call superclass method. */
    return AgendaView.prototype.render.call(this);
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
    /* Call superclass method. */
    return AgendaView.prototype.remove.call(this, jqEvent);
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  AgendaView.extend(
    {
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/basic-week',['require','exports','module','backbone','views/basic','i18n!nls/i18n'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Backbone = require("backbone");
    var BasicView = require("views/basic");
    var i18n = require("i18n!nls/i18n");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Call superclass method. */
    BasicView.prototype.initialize.call(this, opt);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Call superclass method. */
    return BasicView.prototype.render.call(this);
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
    /* Call superclass method. */
    return BasicView.prototype.remove.call(this, jqEvent);
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  BasicView.extend(
    {
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/agenda-week',['require','exports','module','backbone','views/agenda','i18n!nls/i18n'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Backbone = require("backbone");
    var AgendaView = require("views/agenda");
    var i18n = require("i18n!nls/i18n");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var initializeImpl;
var renderImpl;
var removeImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Call superclass method. */
    AgendaView.prototype.initialize.call(this, opt);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Call superclass method. */
    return AgendaView.prototype.render.call(this);
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
    /* Call superclass method. */
    return AgendaView.prototype.remove.call(this, jqEvent);
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  AgendaView.extend(
    {
      "initialize" : initializeImpl,
      "render" : renderImpl,
      "remove" : removeImpl
    }
  );

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/month',['require','exports','module','backbone','i18n!nls/i18n'],
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
var formatTitleImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
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
  function (tau) {
    0;
    return i18n.monthNames[tau.getUtcMonth()] + " " + tau.getUtcYear();
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.View.extend(
    {
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

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/year',['require','exports','module','backbone','i18n!nls/i18n'],
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
var formatTitleImpl;

initializeImpl =
  /* Invoked when the view is created. */
  function (opt) {
    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
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
  function (tau) {
    0;
    return tau.getUtcYear();
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  Backbone.View.extend(
    {
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

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/timeline',['require','exports','module','tau-js','backbone','i18n!nls/i18n'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Tau = require("tau-js");
    var Backbone = require("backbone");
    var i18n = require("i18n!nls/i18n");

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
    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
  };

renderImpl =
  /* Renders the view. */
  function () {
    0;
    /* Rebind all the events. */
    this.delegateEvents();
    /* Return `this` for chained calls. */
    return this;
  };

removeImpl =
  /* Removes the view from the DOM. */
  function (jqEvent) {
    0;
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
  function (tau) {
    var year = tau.getUtcYear();
    var month = tau.getUtcMonth();
    var endTau;
    var endYear;
    var endMonth;

    0;
    endTau =
      new Tau().setUtcYear(year).setUtcMonth(month + this.config.length - 1);
    endYear = endTau.getUtcYear();
    endMonth = endTau.getUtcMonth();
    return (
      i18n.monthNames[month] + " " +
      (year === endYear ? "" : year + " ") +
      "&ndash; " +
      i18n.monthNames[endMonth] + " " +
      endYear
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

/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define('views/head',['require','exports','module','backbone','views/basic-day','views/agenda-day','views/basic-week','views/agenda-week','views/month','views/year','views/timeline','i18n!nls/i18n'],
  function (require, exports, module) {
    

    /* Require the deps. */
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

onModelChangeCurrentViewImpl =
  function (model, value, opt) {
    0;
    this.$el.find(".js-bc-st-selected")
      .removeClass("bc-st-selected js-bc-st-selected");
    this.$el.find(".js-bc-" + value)
      .addClass("bc-st-selected js-bc-st-selected");
  };

onClickButtonImpl =
  function (jqEvent) {
    var $target = $(jqEvent.target);

    0;
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
        "left" : [ "day", "week", "month" ],
        "center" : [ "title" ],
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
define('backbone-calendar',['require','exports','module','tau-js','backbone','models/main','views/head','i18n!nls/i18n','defaults'],
  function (require, exports, module) {
    

    /* Require the deps. */
    var Tau = require("tau-js");
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
    var now;

    0;
    /* Bind `this` for all of the object’s function members.
       http://backbonejs.org/#FAQ-this */
    _.bindAll(this);
    opt || (opt = {});
    now =
      opt.now ||
      (
        /* There’ll be no other `Date` references from now on. */
        function (date) {
          return (
            new Tau()
              .setUtcYear(date.getUTCFullYear())
              .setUtcMonth(date.getUTCMonth())
              .setUtcDate(date.getUTCDate())
              .setUtcHours(date.getUTCHours())
              .setUtcMinutes(date.getUTCMinutes())
              .setUtcSeconds(date.getUTCSeconds())
              .setUtcMilliseconds(date.getUTCMilliseconds())
          );
        }
      )(new Date());
    this.model =
      new MainModel(
        {
          "now" : now,
          "currentTau" : now,
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
    if (this.headView) {
      this.headView.remove();
      this.headView = null;
    }
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
