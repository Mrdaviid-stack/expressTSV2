import express, { Express, Request, Response } from "express";

import middleware from "./app.middleware";
import router from "./app.router";

const app: Express = express();
const port: number = Number(process.env.PORT);

middleware(app);
router(app);

export function Server() {
    app.listen(port, () => console.log("running" + port));
}
