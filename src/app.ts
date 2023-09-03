import express, { Express, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "../swagger.json";

import middleware from "./app.middleware";
import router from "./app.router";

async function bootstrap() {
    const app: Express = express();
    const port: number = Number(process.env.PORT);

    middleware(app);
    app.get("/", (req, res) => res.send("index"));
    router(app);
    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

    app.listen(port, () =>
        console.log("running " + "http://localhost:" + port),
    );
}

export default bootstrap;
