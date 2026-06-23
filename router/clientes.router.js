const express = require("express");
const clienteController = require("../controllers/cliente.controller");

const router = express.Router();

router.get('/clientes', clienteController.consultar);
router.get('/clientes/:id', clienteController.obtenerPorId);
router.post('/clientes', clienteController.crear);
router.put('/clientes/:id', clienteController.actualizar);
router.delete('/clientes/:id', clienteController.eliminar);

module.exports = router;