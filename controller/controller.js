const Game = require("../model/Db");
require('dotenv').config();
const io = require("../index").io;
const uniqid= require("uniqid");

let gameDb = new Game();

// module.exports.createGame = function (socket) {
//
//     console.log('Biri Baglandi.' + socket.id)
//     console.log(uniqid.process('play-'));
//     gameDb.game.player1.socketId=socket.id;
//     gameDb.gameId=uniqid.process('play-');
//     Game.kaydet(gameDb);
//     socket.on('disconnect', () => {
//         console.log('ayrildi' + socket.id)
//     });
// }

module.exports.createGame = function (req,res) {
    let gameUniqid= uniqid.process('play-');
    gameDb.gameId=gameUniqid;
    Game.kaydet(gameDb);
    data= {
        link: 'http://localhost:3000/game/'+gameUniqid,
        id : gameUniqid
    }
    res.json(data);

}
module.exports.matchControl = function(req,res) {
    console.log('matchControl')
    let gameid = req.body.gameid;
    console.log(gameid);
    let matchCont = Game.bul(gameid);
    console.log(Game.bul(gameid));
    // if (matchCont[0].match){
    //     res.send(gameid);
    // }

}
module.exports.playGame= (req,res)=>{
    console.log(' '+ req.originalUrl + '  ' +req.baseURI + '  ' +req.path);
    res.send('sa');
}
module.exports.searchGame = (req,res)=>{
    let gameid = req.body.gameid;
    let isGame = Game.bul(gameid)
    console.log('searchGame');
    console.log(isGame);
    if(isGame[0].match){
        res.send(gameid);
    }
}


//console.log(gameDb);

// var mongoose = require("mongoose");
//
// const url = 'mongodb://127.0.0.1:27017/amiralbatti';
// mongoose.connect(url, {useUnifiedTopology: true,
//     useNewUrlParser: true, useCreateIndex: true });
//


gameDb.game = {
    player1: {
        q: 0,
        w: 0,
        e: 0,
        a: 0,
        s: 0,
        z: 0,
        x: 0,
        name: "",
        imgUrl: "",
        isPlace: false,
        socketId: ""
    },
    player2: {
        q: 0,
        w: 0,
        e: 0,
        a: 0,
        s: 0,
        z: 0,
        x: 0,
        name: "",
        imgUrl: "",
        isPlace: false,
        socketId: ""
    },
}
    gameDb.gameId = "";
    gameDb.match = false;
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
//  Game.kaydet(q,w)


// Game.gameDb.gameDb.save((data) => {
//      console.log(data);
//  });

