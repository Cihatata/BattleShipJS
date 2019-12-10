const express = require('express');

require('dotenv').config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=> {
    res.send('Hello World '+ req.originalUrl + '  ' +req.baseURL);

})
app.use('/admin',(req,res)=> {
    res.send(' '+ req.originalUrl + '  ' +req.baseURI + '  ' +req.path);

})

app.listen(process.env.PORT,() => {
    console.log(`App running on port ${process.env.PORT}`);
});




