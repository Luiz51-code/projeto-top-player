import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API TopPlayer",
      version: "1.0.0",
      description: "Documentação da API TopPlayer",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },

  // 🔥 ESSA LINHA QUE ESTAVA FALTANDO
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;