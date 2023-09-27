var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`)
        .then(response => response.json())
        .then(data => {
            res.json({ movies: data.results })
        })
})

module.exports = router;
