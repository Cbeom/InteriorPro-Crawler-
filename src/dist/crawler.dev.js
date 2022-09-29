"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _fur = _interopRequireDefault(require("./models/fur"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "http://www.remod.co.kr/product/search.html?banner_action=&keyword=";

var getHTML = function getHTML(key, url) {
  return regeneratorRuntime.async(function getHTML$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url + encodeURI(key)));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

var sopa = function sopa(key) {
  var html, $, $courseList;
  return regeneratorRuntime.async(function sopa$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getHTML(key, url));

        case 2:
          html = _context2.sent;
          $ = _cheerio["default"].load(html.data);
          $courseList = $(".prdItem");
          $courseList.each(function (idx, node) {
            var title = $(node).find(".name").text();
            var price = $(node).find(".xans-record-").text();
            var img = $(node).find(".prdImg > a > img").attr("src");
            var sopa = new _fur["default"]({
              title: title,
              price: price,
              img: img
            });
            sopa.save();
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};

sopa("소파");