"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSopa = void 0;

var _fur = _interopRequireDefault(require("../models/fur"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSopa = function getSopa(req, res) {
  var fur;
  return regeneratorRuntime.async(function getSopa$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_fur["default"].find());

        case 2:
          fur = _context.sent;
          return _context.abrupt("return", res.render("sopa", {
            pageTitle: "sopa",
            fur: fur
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getSopa = getSopa;