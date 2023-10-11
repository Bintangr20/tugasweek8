var express = require('express');
var app = express();
var pool = require('./queries')
var film = require('./router/film')
var category = require('./router/category')

//Router list film & film id
app.use('/', film)

//Router list category
app.use('/', category)

pool.connect((err,res)=>{
    console.log(err)
    console.log('connected')
})

app.listen(3000);