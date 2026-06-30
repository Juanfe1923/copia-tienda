const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: [true , 'nombre obligatorio'] },
  precio: { type: Number, required: [true, 'precio obligatorio'] },
  duracionMinutos: { type: Number, required: [true, 'duracion obligatoria'] }
});

module.exports = mongoose.model('Servicio', servicioSchema, 'servicios');