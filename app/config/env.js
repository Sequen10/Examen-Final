const env = {
    database: 'examen_final_so',
    username: 'examen_final_so_user',
    password: 'pIsgw3EjwIPFG1NkTTzkfqbNqj0ejdWY',
    host: 'dpg-d8eh9pn40ujc73djjbjg-a.oregon-postgres.render.com',
    dialect: 'postgres',
    ssl: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;
  