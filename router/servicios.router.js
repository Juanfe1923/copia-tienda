const express = require("express");
const servicioController = require("../controllers/servicio.controller");

const router = express.Router();

router.get('/servicios', servicioController.consultar);
router.get('/servicios/:id', servicioController.obtenerPorId);
router.post('/servicios', servicioController.crear);
router.put('/servicios/:id', servicioController.actualizar);
router.delete('/servicios/:id', servicioController.eliminar);


module.exports = router;