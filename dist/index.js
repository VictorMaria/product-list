"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.status(200).json({
    message: 'Our Products are great'
  });
});
var PORT = process.env.PORT || 2000;
app.listen(PORT, function () {
  return console.log("Our products are live on Port ".concat(PORT));
});