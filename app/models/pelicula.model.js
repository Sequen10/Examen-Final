module.exports = (sequelize, Sequelize) => {
    const Pelicula = sequelize.define("Peliculas", {
        id_pelicula: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        director: {
            type: Sequelize.STRING
        },
        anio: {
            type: Sequelize.INTEGER
        },
        duracion: {
            type: Sequelize.INTEGER
        },
        disponible: {
            type: Sequelize.BOOLEAN
        }
    });
    return Pelicula;
};