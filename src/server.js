//* armar, configurar el servidor y exportarlo

const express = require("express")
const { router } = require("./routes")
const { logginRequest, errorHandler } = require("./middlewares")
const swaggerUi = require("swagger-ui-express")
const { swaggerSpec } = require("./config/swagger")

const app = express()

app.use(logginRequest)
app.use(express.json())


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.use(router)
app.use(errorHandler)


module.exports = {
    app
}