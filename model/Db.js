const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_DB_URL;
mongoose.connect(url, {useUnifiedTopology: true,
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
module.exports = Game;
module.exports.kaydet = function(gamejson){

    gamejson.save((data) => {
        console.log(data);
    });
};
module.exports.bul = function(){
    Game.find( { gameId: "Delibirsey" }, (err, kullanicilar) => {
        if (err) throw err;
        console.log(kullanicilar);
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
