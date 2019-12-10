const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/amiralbatti';
mongoose.connect(url, {useUnifiedTopology: true,
    useNewUrlParser: true, useCreateIndex: true });
// const schema = mongoose.Schema;
//
// let gameIdSchema = new schema({
//     gameId: String,
//     match: Boolean,
//     startTime: Date,
//     onlinePerson: Number
// })

//Schemanin icini bosaltip tablonun tamamini cekebiliriz ama veriyi save edemeyiz. hangi
//nesnelere atayacagini secemz.

//Beliritlen schemaya gore islemler yapiliyor

//Collectionu seciyoruz.
let GameID = mongoose.model('player1',{gameId:String,username:String});


//Veri Ekleme
let newGameID = new GameID();
    newGameID.gameId = "omercihatata2";
    newGameID.username = "asdasda1111";
    newGameID.save({},(err,data)=>{
        console.log(data);
    });

//Veri Ekleme

// GameID.create({gameId: "QQZZZZZZ123wsdsdsdqe3", match: false,startTime: "1970-01-01T00:00:00.000+00:00",
//     onlinePerson: 2
// })

//Veriyi kaldirmak icin

// GameID.findOne({ gameId: "asdasd" },(err,data)=> {
//     data.remove().then(() => {
//         console.log("Silindi");
//     })
// })

//Veri Guncelleme;

GameID.update({ gameId: "asdasdasd" },{
    $set : {
        gameId: "123asdasd"
    }
},() => {
    console.log("VEri Guncellendi")
})


//Find den sonraki kisimda degisken karsinda 1 olan sutunlari getir 0 olan yerleri getirme

//  GameID.find({}, { gameId:1 , _id:0},(err,data) => {
//      console.log(data)
//  })

//Her Seyi Getirme
//Sonuc ARRAY olarak gelir.
GameID.find( { }, (err, kullanicilar) => {
    if (err) throw err;
    console.log(kullanicilar);
});
