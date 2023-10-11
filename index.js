var express = require('express');
var app = express();
var pool = require('./queries')
var film = require('./router/filmListRoute')
var filmId = require ('./router/filmIdRoute')
var category = require('./router/categoryListRoute')
var filmCategory = require('./router/filmCategoryRoute')

//Router list film
app.use('/', film)

//Router film berdasarkan id Masukan endpoint film_id (/1) setelah endpoint /film untuk mencari berdasarkan id
app.use('/film', filmId)

//Router list category
app.use('/', category)

//Router Film Berdasarkan Category)
app.use('/category', filmCategory)

pool.connect((err,res)=>{
    console.log(err)
    console.log('connected')
})

app.listen(3000);