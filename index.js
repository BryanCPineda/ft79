//* levantar la conexion con la db y el servidor

const { pool } = require("./src/config/dbConnect.js")
const { initializateDb } = require("./src/config/initDb.js")
const {  app  } = require("./src/server.js")

const  { loadEnvFile } = require("node:process")
loadEnvFile('.env')

const startServer = async () => {


    await pool.query('SELECT 1')
    await initializateDb()
    console.log("conexion con la base de datos exitosa")

    app.listen(process.env.SERVER_PORT, function(){
      console.log("el servidor se levanto correctamente")
    })

}

startServer()


