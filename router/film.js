var express = require ('express');
var router = express.Router();
var pool = require('/Kuliah/Studi Independen/Week 8/tugasWeek8/server/queries');

//Query list film
router.get('/film', (req, res) => {
    pool.query('SELECT * FROM film ORDER BY film_id ASC ',(err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

//Query Film Berdasarkan ID
router.get('/film/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM film WHERE film_id = $1', [id], (err, result) => {
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