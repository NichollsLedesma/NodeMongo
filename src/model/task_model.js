
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TaskSchema = new Schema({
    titulo: String,
    descripcion: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks', TaskSchema);
