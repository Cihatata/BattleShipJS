"use strict";

var _Db = require("../model/Db");

var _Db2 = _interopRequireDefault(_Db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = require("mongoose");

var url = 'mongodb://127.0.0.1:27017/amiralbatti';
mongoose.connect(url, { useUnifiedTopology: true,
    useNewUrlParser: true, useCreateIndex: true });

var gameDb = new _Db2.default();

gameDb.game = {
    player1: {
        q: 1,
        w: 2
    },
    player2: {
        q: 3,
        w: 4
    }
};
gameDb.gameId = "asdasdasd";
gameDb.match = false;
gameDb.startTime = new Date();

gameDb.save(function (data) {
    console.log(data);
});
