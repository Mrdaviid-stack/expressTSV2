import swaggerAutogen from "swagger-autogen";

const outputFile = "../swagger.json";
const endpointsFiles = ["./samples/index.js"];

function bootstrapSwagger() {
    swaggerAutogen(outputFile, endpointsFiles);
}

(async () => {
    try {
        bootstrapSwagger();
    } catch (error) {
        console.error();
    }
})();
