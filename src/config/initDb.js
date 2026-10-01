const { pool } = require("./dbConnect");


const initializateDb = async () => {

  await pool.query(`
      CREATE TABLE IF NOT EXISTS products(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price INT NOT NULL,
        stock INT NOT NULL DEFAULT 0
      )
    
    `)

  const respuestaDB = await pool.query(`SELECT COUNT(*)::int AS total FROM products`)
  
  if(respuestaDB.rows[0].total === 0 ){
      await pool.query(`
        INSERT INTO products(name, price) VALUES ($1, $2), ($3, $4)
        `, ['television', 1000, 'tennis', 500])
  }

}

module.exports = {
  initializateDb
}
