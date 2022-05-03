const express = require('express');
const db=require("./config/mongoose")
const app = express();
const path = require('path');
const { ppid } = require('process');
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// use express router
app.use('/', require('./routes'));
app.use(express.static('assets'));
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});