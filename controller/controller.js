const Game = require("../model/Db");
require('dotenv').config();
let gameDb = new Game();
//console.log(gameDb);

// var mongoose = require("mongoose");
//
// const url = 'mongodb://127.0.0.1:27017/amiralbatti';
// mongoose.connect(url, {useUnifiedTopology: true,
//     useNewUrlParser: true, useCreateIndex: true });
//


        gameDb.game = {
        player1 : {
            q : 1,
            w : 2
        },
        player2 : {
            q : 3,
            w : 4
        }
    }
        gameDb.gameId = "Sanane3";
        gameDb.match = false ;
        gameDb.startTime = new Date();

    // gameDb.save((data) => {
    //     console.log(data);
    // });
    // gameDb.updateMany({ },{
    // $set : {
    //     gameId: "De"
    // }},(err,data) => {
    //     console.log(err);
    //     console.log(data);
    // console.log("VEri Guncellendi")
    // });
   // gameDb.save();
    Game.kaydet(q,w)
    Game.kaydet(gameDb);
    Game.bul();
    // Game.gameDb.gameDb.save((data) => {
    //      console.log(data);
    //  });

