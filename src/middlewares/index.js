const logginRequest = (req, res, next) => {
  const startedAt = process.hrtime.bigint()
  const timestamp = new Date().toISOString()
  res.on('finish', () => {
    const durationMs = Number(process.hrtime.bigint() - startedAt) / 1e6
    console.log(
      `[${timestamp}] ${req.method} ${req.originalUrl} ${res.statusCode} ${durationMs.toFixed(2)}ms `
    )
  })
  next()
}

const validateProductData = (req, res, next) => {

    const { name, price, stock } = req.body

    if(!name || !price ){
        return res.status(400).json({
          msg: 'falta informacion para crear el producto'
        })
    }

    next()

}

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
      error: err.message 
    })
}


module.exports = {
  logginRequest,
  validateProductData,
  errorHandler
}