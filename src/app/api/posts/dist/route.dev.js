"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = exports.GET = void 0;

var _server = require("next/server");

var _db = _interopRequireDefault(require("@/utils/db"));

var _Post = _interopRequireDefault(require("@/models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GET = function GET(request) {
  var url, username, posts;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = new URL(request.url);
          username = url.searchParams.get("username");
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _db["default"])());

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(_Post["default"].find(username && {
            username: username
          }));

        case 7:
          posts = _context.sent;
          return _context.abrupt("return", new _server.NextResponse(JSON.stringify(posts), {
            status: 200
          }));

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", new _server.NextResponse("Database Error", {
            status: 500
          }));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]]);
};

exports.GET = GET;

var POST = function POST(request) {
  var body, newPost;
  return regeneratorRuntime.async(function POST$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(request.json());

        case 2:
          body = _context2.sent;
          newPost = new _Post["default"](body);
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap((0, _db["default"])());

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(newPost.save());

        case 9:
          return _context2.abrupt("return", new _server.NextResponse("Post has been created", {
            status: 201
          }));

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](4);
          return _context2.abrupt("return", new _server.NextResponse("Database Error", {
            status: 500
          }));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 12]]);
};

exports.POST = POST;