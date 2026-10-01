const  { loadEnvFile } = require("node:process")



if(process.env.NODE_ENV !== 'production'){
      loadEnvFile('.env')
}

const DATABASE_URL = process.env.DATABASE_URL

const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_DATABASE = process.env.DB_DATABASE
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_MAX_CONNECTIONS = process.env.DB_MAX_CONNECTIONS
const DB_IDLE_TIMEOUT = process.env.DB_IDLE_TIMEOUT
const DB_CONNECTION_TIMEOUT = process.env.DB_CONNECTION_TIMEOUT
const SERVER_PORT = process.env.SERVER_PORT

module.exports = {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_MAX_CONNECTIONS,
  DB_IDLE_TIMEOUT,
  DB_CONNECTION_TIMEOUT,
  SERVER_PORT,
  DATABASE_URL
}