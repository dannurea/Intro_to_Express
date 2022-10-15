// Comunicarse con
const mongoose = require('mongoose');
//Schema - objeto que puedes definir
//const Schema = mongoose.Schema;

/* //Que siga esa nomenclatura
const Movie = mew Schema({
    name: {type: String, required: true},
    time: {type: [String], required: true},
    rating: {rating: Number, required: true},
    },
    //Hora en que el objeto se ingreso a la base de datos
    {timestamps: true}
) */
//Exportando modelo
module.exports = mongoose.model('movies', Movie);
