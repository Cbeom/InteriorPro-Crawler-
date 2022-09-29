"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rankfilter = exports.postReport = exports.getReport = exports.deleteRank = exports.rankpostEdit = exports.rankgetEdit = exports.ranksee = exports.rankpostUpload = exports.rankgetUpload = exports.ranksearch = exports.home = void 0;

var _rank = _interopRequireDefault(require("../models/rank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//globalRouter 
var home = function home(req, res) {
  var rank;
  return regeneratorRuntime.async(function home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_rank["default"].find().sort({
            "meta.views": "desc"
          }));

        case 2:
          rank = _context.sent;
          return _context.abrupt("return", res.render("home", {
            pageTitle: "Home",
            rank: rank
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; //검색기능


exports.home = home;

var ranksearch = function ranksearch(req, res) {
  var title, rank;
  return regeneratorRuntime.async(function ranksearch$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          title = req.query.title;
          rank = [];

          if (!title) {
            _context2.next = 6;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(_rank["default"].find({
            title: {
              $regex: new RegExp("".concat(title), "i")
            }
          }));

        case 5:
          rank = _context2.sent;

        case 6:
          return _context2.abrupt("return", res.render("rank/search", {
            pageTitle: "Search Title",
            rank: rank
          }));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //uplod


exports.ranksearch = ranksearch;

var rankgetUpload = function rankgetUpload(req, res) {
  return regeneratorRuntime.async(function rankgetUpload$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("rank/upload", {
            pageTitle: "Upload Rank"
          }));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.rankgetUpload = rankgetUpload;

var rankpostUpload = function rankpostUpload(req, res) {
  var _req$body, title, content, file;

  return regeneratorRuntime.async(function rankpostUpload$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, title = _req$body.title, content = _req$body.content, file = req.file; //이미지 파일을 업로드 할 경우

          if (!file) {
            _context4.next = 6;
            break;
          }

          _context4.next = 4;
          return regeneratorRuntime.awrap(_rank["default"].create({
            title: title,
            description: content,
            image: file.path
          }));

        case 4:
          _context4.next = 8;
          break;

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(_rank["default"].create({
            title: title,
            description: content
          }));

        case 8:
          return _context4.abrupt("return", res.redirect("/"));

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.rankpostUpload = rankpostUpload;

var ranksee = function ranksee(req, res) {
  var id, rank;
  return regeneratorRuntime.async(function ranksee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_rank["default"].findById(id));

        case 4:
          rank = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(_rank["default"].findByIdAndUpdate(id, {
            meta: {
              views: rank.meta.views + 1
            }
          }));

        case 7:
          return _context5.abrupt("return", res.render("rank/see", {
            pageTitle: "".concat(rank.title),
            rank: rank
          }));

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

exports.ranksee = ranksee;

var rankgetEdit = function rankgetEdit(req, res) {
  var id, rank;
  return regeneratorRuntime.async(function rankgetEdit$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_rank["default"].findById(id));

        case 3:
          rank = _context6.sent;
          return _context6.abrupt("return", res.render("rank/edit", {
            pageTitle: "Edit : ".concat(rank.title),
            rank: rank
          }));

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.rankgetEdit = rankgetEdit;

var rankpostEdit = function rankpostEdit(req, res) {
  var _req$body2, title, content, id, file, exists;

  return regeneratorRuntime.async(function rankpostEdit$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _req$body2 = req.body, title = _req$body2.title, content = _req$body2.content, id = req.params.id, file = req.file;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_rank["default"].exists({
            _id: id
          }));

        case 3:
          exists = _context7.sent;

          if (exists) {
            _context7.next = 6;
            break;
          }

          return _context7.abrupt("return", res.redirect("/"));

        case 6:
          if (!file) {
            _context7.next = 11;
            break;
          }

          _context7.next = 9;
          return regeneratorRuntime.awrap(_rank["default"].findByIdAndUpdate(id, {
            title: title,
            description: content,
            image: file.path
          }, {
            "new": true
          }));

        case 9:
          _context7.next = 13;
          break;

        case 11:
          _context7.next = 13;
          return regeneratorRuntime.awrap(_rank["default"].findByIdAndUpdate(id, {
            title: title,
            description: content
          }));

        case 13:
          return _context7.abrupt("return", res.redirect("/"));

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.rankpostEdit = rankpostEdit;

var deleteRank = function deleteRank(req, res) {
  var id;
  return regeneratorRuntime.async(function deleteRank$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_rank["default"].findByIdAndDelete(id));

        case 3:
          return _context8.abrupt("return", res.redirect("/"));

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
}; //report 


exports.deleteRank = deleteRank;

var getReport = function getReport(req, res) {
  var id, rank;
  return regeneratorRuntime.async(function getReport$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _context9.next = 3;
          return regeneratorRuntime.awrap(_rank["default"].findById(id));

        case 3:
          rank = _context9.sent;
          return _context9.abrupt("return", res.render("rank/report", {
            pageTitle: "Report Rank",
            rank: rank
          }));

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
}; //신고기능 보완 필요


exports.getReport = getReport;

var postReport = function postReport(req, res) {
  var id, _req$body3, rtitle, rcontent, rank;

  return regeneratorRuntime.async(function postReport$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id, _req$body3 = req.body, rtitle = _req$body3.rtitle, rcontent = _req$body3.rcontent;
          _context10.next = 3;
          return regeneratorRuntime.awrap(_rank["default"].findById(id));

        case 3:
          rank = _context10.sent;
          _context10.next = 6;
          return regeneratorRuntime.awrap(_rank["default"].findByIdAndUpdate(id, {
            rtitle: rtitle,
            rcontent: rcontent,
            report: {
              rcount: rank.report.rcount + 1
            }
          }, {
            "new": true
          }));

        case 6:
          if (!(rank.report.rcount > 0)) {
            _context10.next = 10;
            break;
          }

          _context10.next = 9;
          return regeneratorRuntime.awrap(_rank["default"].findByIdAndDelete(id));

        case 9:
          return _context10.abrupt("return", res.redirect("/"));

        case 10:
          return _context10.abrupt("return", res.redirect("/"));

        case 11:
        case "end":
          return _context10.stop();
      }
    }
  });
}; //필터기능


exports.postReport = postReport;

var rankfilter = function rankfilter(req, res) {
  var id, selectValue, rank;
  return regeneratorRuntime.async(function rankfilter$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          id = req.params.id, selectValue = req.body.selectValue;
          _context11.next = 3;
          return regeneratorRuntime.awrap(_rank["default"].findById(id));

        case 3:
          rank = _context11.sent;
          _context11.t0 = selectValue;
          _context11.next = _context11.t0 === "upload" ? 7 : _context11.t0 === "view" ? 11 : _context11.t0 === "like" ? 15 : 19;
          break;

        case 7:
          _context11.next = 9;
          return regeneratorRuntime.awrap(_rank["default"].find().sort({
            "createAt": "asc"
          }));

        case 9:
          rank = _context11.sent;
          return _context11.abrupt("break", 19);

        case 11:
          _context11.next = 13;
          return regeneratorRuntime.awrap(_rank["default"].find().sort({
            "meta.views": "desc"
          }));

        case 13:
          rank = _context11.sent;
          return _context11.abrupt("break", 19);

        case 15:
          _context11.next = 17;
          return regeneratorRuntime.awrap(_rank["default"].find().sort({
            "meta.rating": "desc"
          }));

        case 17:
          rank = _context11.sent;
          return _context11.abrupt("break", 19);

        case 19:
          ;

        case 20:
        case "end":
          return _context11.stop();
      }
    }
  });
};

exports.rankfilter = rankfilter;