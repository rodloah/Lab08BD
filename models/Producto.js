var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    tipo: {type: String, required: true, max: 20},
    precio: {type: String, required: true},
    lote: {type: String, required: true, max:2},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', ProductoSchema);
