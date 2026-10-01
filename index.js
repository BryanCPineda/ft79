//* levantar la conexion con la db y el servidor

const { pool } = require("./src/config/dbConnect.js")
const { PORT } = require("./src/config/envs.js")
const { initializateDb } = require("./src/config/initDb.js")
const {  app  } = require("./src/server.js")



const startServer = async () => {

    await pool.query('SELECT 1')
    await initializateDb()
    console.log("conexion con la base de datos exitosa")

    app.listen(PORT, function(){
      console.log("el servidor se levanto correctamente")
    })

}

startServer()


