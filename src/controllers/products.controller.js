const { getProductService, getProductByIdService, createProductService } = require("../services/products.service")

const  getProductsController = async(req, res) => {

    const productos = await getProductService()

    res.status(201).json({
        msg: 'todo ok en /',
        data: productos
    })
}

const getProductByIdController = (req,res) => {

    const { id } = req.params

    const product = getProductByIdService(id)

    if(!product){
      return res.status(404).json({
        msg: `producto con id ${id} no encontrado`
      })
    }

    return res.status(200).json({
      msg: 'producto encontrado',
      data: product
    })

}

const createProductController = async (req, res, next) => {

  try {
    await createProductService(req.body)
    res.status(201).json({
        msg: 'producto creado exitosamente'
      })
  } catch (error) {
    const err = {
        ...error,
        status: 404,
        message: 'mi propio error'
    }
    next(err)
  }

}




module.exports = {
  getProductsController,
  getProductByIdController,
  createProductController
}