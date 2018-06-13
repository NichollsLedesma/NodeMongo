module.exports = function (){ // asi exportamos derecho viejo el modelo
    var db = require('./../libs/db-connection')();
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    const task = Schema({
        titulo: String,
        descripcion: String,
        status: Boolean
    });

    return mongoose.model('tasks', task);
}