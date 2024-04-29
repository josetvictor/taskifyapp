import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Taskify API",
      version: "1.0.0",
      description: "Documentação da API",
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/**.js"],
};

const swaggerSetup = await swaggerJsdoc(options);

export default swaggerSetup;
