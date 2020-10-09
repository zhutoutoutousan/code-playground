"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
exports.app = app;

const start = async () => {
  try {
    app.listen(3000, () => {
      console.log(`REST API on http://localhost:${3000}/api}`);
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;