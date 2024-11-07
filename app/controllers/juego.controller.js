const db = require('../config/db.config.js');
const Juego = db.Juego;

exports.create = (req, res) => {
    let juego = {};

    try {
        juego.nombre = req.body.nombre;
        juego.genero = req.body.genero;
        juego.plataforma = req.body.plataforma;
        juego.fecha_lanzamiento = req.body.fecha_lanzamiento;
        juego.alquiler = req.body.alquiler;
        juego.dispónibilidad = req.body.dispónibilidad;
        juego.fecha_alquiler = req.body.fecha_alquiler;
        juego.devolucion = req.body.devolucion
        juego.cliente = req.body.cliente;
        juego.comentario = req.body.comentario

        ;

        Juego.create(juego).then(result => {
            res.status(200).json({
                message: "juego creado exitosamente con id = " + result.id_juego,
                libro: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear el juego!",
            error: error.message
        });
    }
};



exports.getJuegoById = (req, res) => {
    let juegoId = req.params.id;
    Libro.findByPk(libroId)
        .then(juego => {
            res.status(200).json({
                message: "juego obtenido exitosamente con id = " + juegoId,
                juego: juego
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener juego con id!",
                error: error
            });
        });
};

exports.updateById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await Juego.findByPk(juegoId);
    
        if (!juego) {
            res.status(404).json({
                message: "No se encontró el juego para actualizar con id = " + juegoId,
                juego: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                juego: req.body.juego,
                genero: req.body.genero,
                plataforma: req.body.plataforma,  
                fecha_lanzamiento: req.body.fecha_lanzamiento,
                alquiler: req.body.alquiler,
                dispónibilidad: req.body.dispónibilidad,
                fecha_alquiler: req.body.fecha_alquiler,
                devolucion: req.body.devolucion,
                cliente: req.body.cliente,
                comentario: req.body.comentario

            }
            let result = await Juego.update(updatedObject, {returning: true, where: {id_juego: juegoId}});
            
            if (!result) {
                res.status(500).json({
                    message: "No se puede actualizar un juego con id = " + req.params.id,
                    error: "No se pudo actualizar el juego",
                });
            };

            res.status(200).json({
                message: "Actualización exitosa de un juego con id = " + juegoId,
                juego: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar una habitacion con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await Juego.findByPk(juegoId);

        if (!juego) {
            res.status(404).json({
                message: "No existe el libro con id = " + juegoId,
                error: "404",
            });
        } else {
            await juego.destroy();
            res.status(200).json({
                message: "Eliminación exitosa del libro con id = " + juegoId,
                juego: juego,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar un libro con id = " + req.params.id,
            error: error.message,
        });
    }
}