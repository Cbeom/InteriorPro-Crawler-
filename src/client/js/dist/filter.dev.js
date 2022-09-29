"use strict";

var rankfilter = document.getElementById("viewchoice");
var CLICKED_CLASS = "clicked";
var clicked = false;

var filter = function filter() {
  var selectValue;
  return regeneratorRuntime.async(function filter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          selectValue = rankfilter.value;
          console.log(selectValue);
          fetch("/rank/filter", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              selectValue: selectValue
            })
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

function init() {
  if (rankfilter) {
    rankfilter.addEventListener("change", filter);
  }
}

init();