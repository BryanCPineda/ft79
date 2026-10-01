const { pool } = require("../config/dbConnect")


const getProductService = async () => {
  const responseDb = await pool.query('SELECT * FROM products')
  return responseDb.rows
}

const getProductByIdService = (id) => {
}

const createProductService = async( { name, price, stock } ) => {

    await pool.query(`
        INSERT INTO products(name, price, stock) VALUES ($1, $2, $3) 
    `, [name, price, stock])

    return 'ok'

}

module.exports = {
  getProductService,
  getProductByIdService,
  createProductService
}