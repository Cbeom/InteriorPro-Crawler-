"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _crawlerController = require("../controllers/crawlerController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var furupload = (0, _multer["default"])({
  dest: "uploads/"
});

var furRouter = _express["default"].Router();

furRouter.route("/fur").get(_crawlerController.getSopa);
var _default = furRouter;
exports["default"] = _default;