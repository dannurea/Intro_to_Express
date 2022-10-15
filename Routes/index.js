const express = require('express');

//const MovieCtrl = require('../Controllers');
const {createMovie, getMovie, updateMovie, deleteMovie} = require('../Controllers');
const router = express.Router();

router.post('/createMovie', createMovie);
router.get('/getMovie/:id', getMovie);
router.delete('/deleteMovie/:id', deleteMovie);
router.put('/update-movie', updateMovie);
router.get('/get-movie', getMovies);