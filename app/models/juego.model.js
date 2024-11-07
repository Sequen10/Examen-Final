module.exports = (sequelize, Sequelize) => {
    const Juego = sequelize.define("Juegos", {
        id_juego: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        plataforma: {
            type: Sequelize.STRING
        },
        fecha_lanzamiento: {
            type: Sequelize.DATE
        },
        alquiler:{
            type: Sequelize.DECIMAL
        },
        disponibilidad:{
            type: Sequelize.BOOLEAN 
        },
        fecha_alquiler:{
            type: Sequelize.DATE 
        },
        devolucion: {
            type: Sequelize.DATE
        },
        cliente: {
            type: Sequelize.STRING
        },
        comentario: {
            type: Sequelize.TEXT
        }

    });
    return Juego;
};