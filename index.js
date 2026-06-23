require("dotenv").config();

const path = require("path");


const express = require("express");

const conexion = require("./config/connectiondb");

const clienteController = require("./controllers/cliente.controller");

const app = express();
const enrutamiento = require("./router/clientes.router.js")
const enrutamiento2 = require("./router/productos.router.js")
const enrutamiento3 = require("./router/servicios.router.js")

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/api/cli/',enrutamiento)
app.use('/api/pro/',enrutamiento2)
app.use('/api/ser/',enrutamiento3)

conexion
  .then(() => console.log("Conexion exitosa a MongoDB"))
  .catch(err => console.log(err));

app.get('/',clienteController.home);
app.get('/formulario/:tipo', clienteController.formulario);

app.listen(8000, () => {
  console.log("Servidor corriendo en puerto 8000");
});