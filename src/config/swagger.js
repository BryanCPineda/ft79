const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "API de bloc",
    version: "1.0.0",
    description: "Documentacion de la API de productos",
  },
  servers: [
    {
      url: process.env.NODE_ENV = 'production' ? "https://ft79-production.up.railway.app/"  : "http://localhost:3000",
    },
  ],
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          name: { type: "string", example: "television" },
          price: { type: "integer", example: 1000 },
          stock: { type: "integer", example: 0 },
        },
        required: ["id", "name", "price", "stock"],
      },
      ProductInput: {
        type: "object",
        properties: {
          name: { type: "string", example: "mouse gamer" },
          price: { type: "integer", example: 120 },
          stock: { type: "integer", example: 15 },
        },
        required: ["name", "price"],
      },
      ProductsResponse: {
        type: "object",
        properties: {
          msg: { type: "string", example: "todo ok en /" },
          data: {
            type: "array",
            items: { $ref: "#/components/schemas/Product" },
          },
        },
        required: ["msg", "data"],
      },
      ProductResponse: {
        type: "object",
        properties: {
          msg: { type: "string", example: "producto encontrado" },
          data: { $ref: "#/components/schemas/Product" },
        },
        required: ["msg", "data"],
      },
      MessageResponse: {
        type: "object",
        properties: {
          msg: { type: "string", example: "producto creado exitosamente" },
        },
        required: ["msg"],
      },
      ErrorResponse: {
        type: "object",
        properties: {
          error: { type: "string", example: "mi propio error" },
        },
      },
    },
  },
  paths: {
    "/productos": {
      get: {
        summary: "obtiene todos los productos",
        responses: {
          201: {
            description: "Lista de productos obtenida exitosamente",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ProductsResponse" },
                examples: {
                  ok: {
                    value: {
                      msg: "todo ok en /",
                      data: [
                        { id: 1, name: "television", price: 1000, stock: 0 },
                        { id: 2, name: "tennis", price: 500, stock: 0 },
                      ],
                    },
                  },
                },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: { error: "mi propio error" },
              },
            },
          },
        },
      },
      post: {
        summary: "crea un nuevo producto",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ProductInput" },
              examples: {
                conStock: {
                  value: { name: "teclado mecanico", price: 250, stock: 10 },
                },
                sinStock: {
                  value: { name: "audifonos", price: 300 },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Producto creado exitosamente",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/MessageResponse" },
                example: { msg: "producto creado exitosamente" },
              },
            },
          },
          400: {
            description: "Datos incompletos para crear producto",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/MessageResponse" },
                example: { msg: "falta informacion para crear el producto" },
              },
            },
          },
          500: {
            description: "Error interno del servidor",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ErrorResponse" },
                example: { error: "mi propio error" },
              },
            },
          },
        },
      },
    },
    "/productos/{id}": {
      get: {
        summary: "obtiene un producto por id",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID del producto",
            schema: { type: "integer", example: 1 },
          },
        ],
        responses: {
          200: {
            description: "Producto encontrado",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ProductResponse" },
                example: {
                  msg: "producto encontrado",
                  data: { id: 1, name: "television", price: 1000, stock: 0 },
                },
              },
            },
          },
          404: {
            description: "Producto no encontrado",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/MessageResponse" },
                example: { msg: "producto con id 99 no encontrado" },
              },
            },
          },
        },
      },
    },
  },
}

module.exports = { swaggerSpec }