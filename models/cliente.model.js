const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: [true, 'nombre obligatorio'] },
  email: { type: String, required: [true,'email obligatorio'], unique: [true, 'email ya registrado'] },
  telefono: { type: String }
});

module.exports = mongoose.model('Cliente', clienteSchema);