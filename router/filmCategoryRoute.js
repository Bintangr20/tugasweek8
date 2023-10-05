var express = require ('express');
var router = express.Router();
var pool = require('/Kuliah/Studi Independen/Week 8/tugasWeek8/server/queries');

//Query List Film Berdasarkan ID Category
router.get('/:category_id/film', (req, res) => {
    const categoryId = req.params.category_id;
    pool.query('SELECT category.category_id, category.name, film.film_id, film.title FROM film_category JOIN film ON film_category.film_id = film.film_id JOIN category ON film_category.category_id = category.category_id WHERE category.category_id = $1 ORDER BY category.category_id ASC', [categoryId], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

pool.connect((err,res)=>{
    console.log(err)
    console.log('connected')
})

module.exports = router