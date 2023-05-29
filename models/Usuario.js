var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    edad: {type: String, required: true, max: 20},
    email: {type: String, required: true},
    estado: {type: String, required: true, max:2},
    numhijos: {type: String, required: true, max: 20},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
