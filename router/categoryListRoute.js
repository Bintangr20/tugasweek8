var express = require ('express');
var router = express.Router();
var pool = require('/Kuliah/Studi Independen/Week 8/tugasWeek8/server/queries');

//Query list category
router.get('/category', (req, res) => {
    pool.query('SELECT * FROM category ORDER BY category_id ASC ',(err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

//Query list category berdasarkan id
router.get('/category/:category_id', (req, res) => {
    const categoryId = req.params.category_id;
    pool.query('SELECT *FROM category WHERE category.category_id = $1 ORDER BY category.category_id ASC', [categoryId], (err, result) => {
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