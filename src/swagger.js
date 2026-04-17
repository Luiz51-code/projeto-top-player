import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TopPlayer API",
      version: "1.0.0",
      description: "API para gerenciamento de jogadores, jogos e partidas",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;