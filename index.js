const express = require('express');
const controller = require("./controller/controller");
require('dotenv').config();
//const socket = require('');
let app = express();


const server = require('http').Server(app);
const io = require('socket.io')(server);


//Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('.'))

console.log(process.env.MONGO_DB_URL);

app.get('/',(req,res)=> {
    res.sendFile(__dirname +'/index.html');
})
app.get('/game/:gameid',controller.playGame);

app.get('/create' , controller.createGame);

app.post('/control', controller.matchControl);

app.post('/search' , controller.searchGame)



module.exports.io=io;
io.on('connection', function (socket) {
    console.log(socket.id);
});



server.listen(process.env.PORT,() => {
    console.log(`App running on port ${process.env.PORT}`);
});
// app.use('/admin',(req,res)=> {
//     res.send(' '+ req.originalUrl + '  ' +req.baseURI + '  ' +req.path);
//
// })






