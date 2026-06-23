const Cliente = require('../models/cliente.model');

exports.consultar = async (req, res) => {
  const data = await Cliente.find();
  console.log(data)
  res.render('pages/clientes', { clientes: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Cliente.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {

  const data = new Cliente(req.body);
  await data.save();

  res.redirect('/clientes'); 

};

exports.actualizar = async (req, res) => {
  const data = await Cliente.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Cliente eliminado" });
};

exports.home = async(req,res)=>{
  res.render('pages/index')
}

exports.formulario = (req, res) => {
  const tipo = req.params.tipo;

  console.log("TIPO RECIBIDO:", tipo); // 🔥 debug

  let config = {
    titulo: "Formulario"
  };

  if (tipo === "cliente") config.titulo = "Crear Cliente";
  if (tipo === "producto") config.titulo = "Crear Producto";
  if (tipo === "servicio") config.titulo = "Crear Servicio";

  res.render("pages/formulario", {
    tipo,
    config
  });
};
