"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var furnitureSchema = new _mongoose["default"].Schema({
  title: {
    type: String
  },
  price: {
    type: String
  },
  img: {
    type: String
  }
});

var Furniture = _mongoose["default"].model("Furniture", furnitureSchema);

var _default = Furniture;
exports["default"] = _default;