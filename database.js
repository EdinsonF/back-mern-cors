const mongoose = require('mongoose');

const DB = 'mongodb+srv://mongodb:13579@cluster0.w5soy.mongodb.net/veterinaria?retryWrites=true&w=majority';

mongoose.connect(DB)
    .then(db => console.log('Base de Datos Conectada'))
    .catch(err => console.log(err));

    module.exports = mongoose;
