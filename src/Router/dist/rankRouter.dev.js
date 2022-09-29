"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _rankController = require("../controllers/rankController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rankupload = (0, _multer["default"])({
  dest: "uploads/"
});

var rankRouter = _express["default"].Router();

rankRouter.get("/search", _rankController.ranksearch);
rankRouter.route("/upload").get(_rankController.rankgetUpload).post(rankupload.single("avatar"), _rankController.rankpostUpload);
rankRouter.get("/:id([a-z\\d+]{24})", _rankController.ranksee);
rankRouter.route("/:id([a-z\\d+]{24})/edit").get(_rankController.rankgetEdit).post(rankupload.single("avatar"), _rankController.rankpostEdit);
rankRouter.get("/:id([a-z\\d+]{24})/delete", _rankController.deleteRank);
rankRouter.route("/:id([a-z\\d+]{24})/report").get(_rankController.getReport).post(_rankController.postReport);
rankRouter.post("/filter", _rankController.rankfilter);
var _default = rankRouter;
exports["default"] = _default;