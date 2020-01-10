const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_DB_URL;
console.log(url)
mongoose.connect('mongodb://127.0.0.1:27017/amiralbatti', {useUnifiedTopology: true,
    useNewUrlParser: true, useCreateIndex: true });


const Schema = mongoose.Schema;
let game = new Schema({
    game : {
        player1 : Object,
        player2 : Object
    },
    gameId : String,
    match : Boolean,
    startTime : Date,
});

let Game = mongoose.model("games",game);
module.exports= Game;
module.exports.kaydet = function(gamejson){
    console.log(gamejson)
    // Game.create(gamejson,function (err) {
    //     console.log(err);
    // })
    gamejson.save((err) => {
        console.log(err);
    });
};
module.exports.bul = function(gameid){
    Game.find( { gameId: gameid }, (err, data) => {
        if (err) throw err;
        // if(data[0].match=true){
        //     return true;
        // }
        console.log('bul')
        console.log(typeof data);
        if (data){
            console.log('ife girdi')
            // return JSON.stringify(data);
            return "xd";

        }
    });

}
// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }
//
//     describeBook() {
//         let description = this.title + " by " + this.author + ".";
//         return description;
//     }
// }

//module.exports = Game;


// let gameDb = new Game();

// gameDb.game = {
//     player1 : {
//         q : 1,
//         w : 2
//     },
//     player2 : {
//         q : 3,
//         w : 4
//     }
// }
// gameDb.gameId = "asdasdasd";
// gameDb.match = false ;
// gameDb.startTime = new Date();

// gameDb.save((data) => {
//     console.log(data);
// })
