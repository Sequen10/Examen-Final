let express = require('express');
let router = express.Router();
 
//Importar tablas
const juegos = require('../controllers/juego.controller.js');

//Tabla usuarios
router.post('/api/juegos/create', juegos.create);
router.get('/api/juegos/onebyid/:id', juegos.getJuegoById);
router.put('/api/juegos/update/:id', juegos.updateById);
router.delete('/api/juegos/delete/:id', juegos.deleteById);


module.exports = router;