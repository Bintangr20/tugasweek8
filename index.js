var express = require('express');
var app = express();
var pool = require('./queries')

//Router list film
var film = require('./router/filmListRoute')
app.use('/', film)

//Router film berdasarkan id Masukan endpoint film_id (/1) setelah endpoint /film untuk mencari berdasarkan id
var filmId = require ('./router/filmIdRoute')
app.use('/film', filmId)

//Router list category
var category = require('./router/categoryListRoute')
app.use('/', category)

//Router Film Berdasarkan Category
var filmCategory = require('./router/filmCategoryRoute')
app.use('/category', filmCategory)

pool.connect((err,res)=>{
    console.log(err)
    console.log('connected')
})

app.listen(3000);