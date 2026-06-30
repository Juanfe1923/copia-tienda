const express = require("express");
const clienteController = require("../controllers/cliente.controller");

const router = express.Router();

router.get('/clientes', clienteController.consultar);
router.get('/clientes/:email', clienteController.obtenerPorId);
router.post('/clientes', clienteController.crear);
router.put('/clientes/:email', clienteController.actualizar);
router.delete('/clientes/:id', clienteController.eliminar);

module.exports = router;