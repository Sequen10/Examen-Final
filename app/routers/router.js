let express = require('express');
let router = express.Router();

//Importar tablas
const juegos = require('../controllers/juego.controller.js');
// 👇 Ahora se llama "peliculas", igual que "juegos"
const peliculas = require('../controllers/pelicula.controller.js'); 

//Tabla usuarios (Juegos)
router.post('/api/juegos/create', juegos.create);
router.get('/api/juegos/onebyid/:id', juegos.getJuegoById);
router.put('/api/juegos/update/:id', juegos.updateById);
router.delete('/api/juegos/delete/:id', juegos.deleteById);

//Tabla Películas 👇 (Mismo estilo exacto)
router.post('/api/peliculas/create', peliculas.create);
router.get('/api/peliculas/onebyid/:id', peliculas.getPeliculaById);
router.put('/api/peliculas/update/:id', peliculas.updateById);
router.delete('/api/peliculas/delete/:id', peliculas.deleteById);

module.exports = router;