"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

require("./db");

require("./models/notice");

require("./models/rank");

require("./crawler");

require("./models/fur");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

var _middleware = require("./middleware");

var _globalRouter = _interopRequireDefault(require("./Router/globalRouter"));

var _noticeRouter = _interopRequireDefault(require("./Router/noticeRouter"));

var _rankRouter = _interopRequireDefault(require("./Router/rankRouter"));

var _furRouter = _interopRequireDefault(require("./Router/furRouter"));

var _userRouter = _interopRequireDefault(require("./Router/userRouter"));

var _apiRouter = _interopRequireDefault(require("./Router/apiRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var logger = (0, _morgan["default"])('dev');
var PORT = 3001;
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger); // app.use(
//     session({
//         secret: process.env.COOKIE_ID,
//         resave: false,
//         saveUninitialized: false,
//         store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
//     })
// );

app.use("/static", _express["default"]["static"]("asset"));
app.use("/uploads", _express["default"]["static"]("uploads")); // app.use(globalMiddleware);

app.use("/", _globalRouter["default"]);
app.use("/rank", _rankRouter["default"]);
app.use("/notice", _noticeRouter["default"]);
app.use("/crawler", _furRouter["default"]);
app.use("/user", _userRouter["default"]);
app.use("/api", _apiRouter["default"]);
var _default = app;
exports["default"] = _default;

var handleListen = function handleListen() {
  return console.log("http://localhost:".concat(PORT));
};

app.listen(PORT, handleListen);