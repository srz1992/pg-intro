const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 5000 || process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const songRouter = require('./routes/song-router');
app.use('/song', songRouter);

app.listen(port, (req, res)=>{
    console.log('listening on port:', port);
});