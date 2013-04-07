/* This is the Basic AMD Hybrid Format.
   http://addyosmani.com/writing-modular-js/ */
define(
  function (require, exports, module) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var padImpl;
var dateToDstrImpl;
var dstrFullYearImpl;
var dstrMonthImpl;
var dstrDateImpl;
var dstrHoursImpl;
var dstrMinutesImpl;
var dstrSecondsImpl;
var dstrMillisecondsImpl;
var doesDstrHaveOffsetImpl;
var dstrOffsetImpl;

padImpl =
  function (number) {
    return (number < 10 ? "0" : "") + number;
  };

dateToDstrImpl =
  /* Converts a `Date` object to an ISO 8601 string
  which contains the offset from UTC, unlike `Date#toISOString()`. */
  function (date) {
    var ofs = date.getTimezoneOffset() / 60;

    return (
      date.getFullYear() + "-" +
      this.pad(date.getMonth() + 1) + "-" +
      this.pad(date.getDate()) + "T" +
      this.pad(date.getHours()) + ":" +
      this.pad(date.getMinutes()) + ":" +
      this.pad(date.getSeconds()) + "." +
      ("" + (date.getMilliseconds() / 1000).toFixed(3)).slice(2, 5) +
      (
        ofs === 0 ?
        "Z" :
        (
          ofs > 0 ? "-" + this.pad(ofs) : "+" + this.pad(- ofs)
        ) + ":00"
      )
    );
  };

dstrFullYearImpl =
  function (dstr) {
    return + dstr.slice(0, 4);
  };

dstrMonthImpl =
  function (dstr) {
    return + dstr.slice(5, 7) - 1;
  };

dstrDateImpl =
  function (dstr) {
    return + dstr.slice(8, 10);
  };

dstrHoursImpl =
  function (dstr) {
    return + dstr.slice(11, 13);
  };

dstrMinutesImpl =
  function (dstr) {
    return + dstr.slice(14, 16);
  };

dstrSecondsImpl =
  function (dstr) {
    return + dstr.slice(17, 19);
  };

dstrMillisecondsImpl =
  function (dstr) {
    return + dstr.slice(20, 23);
  };

doesDstrHaveOffsetImpl =
  function (dstr) {
    return dstr.length === 29;
  };

dstrOffsetImpl =
  function (dstr) {
    return this.doesDstrHaveOffset(dstr) ? - dstr.slice(23, 26) : 0;
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api =
  {
    "pad" : padImpl,
    "dateToDstr" : dateToDstrImpl,
    "dstrFullYear" : dstrFullYearImpl,
    "dstrMonth" : dstrMonthImpl,
    "dstrDate" : dstrDateImpl,
    "dstrHours" : dstrHoursImpl,
    "dstrMinutes" : dstrMinutesImpl,
    "dstrSeconds" : dstrSecondsImpl,
    "dstrMilliseconds" : dstrMillisecondsImpl,
    "doesDstrHaveOffset" : doesDstrHaveOffsetImpl,
    "dstrOffset" : dstrOffsetImpl
  };

return api;



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
);
