"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _noticeController = require("../controllers/noticeController");

var _rankController = require("../controllers/rankController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get("/", _rankController.home);
globalRouter.get("/notice", _noticeController.notice); // globalRouter.get("/search", search);

var _default = globalRouter;
exports["default"] = _default;