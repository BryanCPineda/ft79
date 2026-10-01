const { Router } = require("express")
const { getProductsController, getProductByIdController, createProductController } = require("../controllers/products.controller")
const { validateProductData } = require("../middlewares")

const router = Router()

router.get("/productos",  getProductsController)

router.get("/productos/:id",  getProductByIdController)

router.post("/productos",  validateProductData, createProductController)

module.exports = { 
  router
}

