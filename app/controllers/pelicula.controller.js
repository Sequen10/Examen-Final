const db = require('../config/db.config.js');
const Pelicula = db.Pelicula; // Nota: Asegúrate de que en db.config.js esté mapeado como 'Pelicula'

exports.create = (req, res) => {
    let pelicula = {};

    try {
        pelicula.titulo = req.body.titulo;
        pelicula.genero = req.body.genero;
        pelicula.director = req.body.director;
        pelicula.anio = req.body.anio;
        pelicula.duracion = req.body.duracion;
        pelicula.disponible = req.body.disponible;

        Pelicula.create(pelicula).then(result => {
            res.status(200).json({
                message: "pelicula creada exitosamente con id = " + result.id_pelicula,
                pelicula: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear la película!",
            error: error.message
        });
    }
};

exports.getPeliculaById = (req, res) => {
    let peliculaId = req.params.id;
    Pelicula.findByPk(peliculaId)
        .then(pelicula => {
            if (!pelicula) {
                return res.status(404).json({
                    message: "No se encontró la película con id = " + peliculaId,
                    error: "404"
                });
            }
            res.status(200).json({
                message: "pelicula obtenida exitosamente con id = " + peliculaId,
                pelicula: pelicula
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener película con id!",
                error: error
            });
        });
};

exports.updateById = async (req, res) => {
    try {
        let peliculaId = req.params.id;
        let pelicula = await Pelicula.findByPk(peliculaId);
    
        if (!pelicula) {
            res.status(404).json({
                message: "No se encontró la película para actualizar con id = " + peliculaId,
                pelicula: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                titulo: req.body.titulo,
                genero: req.body.genero,
                director: req.body.director,  
                anio: req.body.anio,
                duracion: req.body.duracion,
                disponible: req.body.disponible
            }
            let result = await Pelicula.update(updatedObject, {returning: true, where: {id_pelicula: peliculaId}});
            
            if (!result) {
                res.status(500).json({
                    message: "No se puede actualizar una película con id = " + req.params.id,
                    error: "No se pudo actualizar la película",
                });
            };

            res.status(200).json({
                message: "Actualización exitosa de una película con id = " + peliculaId,
                pelicula: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar una película con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        let peliculaId = req.params.id;
        let pelicula = await Pelicula.findByPk(peliculaId);

        if (!pelicula) {
            res.status(404).json({
                message: "No existe la película con id = " + peliculaId,
                error: "404",
            });
        } else {
            await pelicula.destroy();
            res.status(200).json({
                message: "Eliminación exitosa de la película con id = " + peliculaId,
                pelicula: pelicula,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar una película con id = " + req.params.id,
            error: error.message,
        });
    }
}