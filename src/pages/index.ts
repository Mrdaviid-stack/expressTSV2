import { Express, Router } from "express";
import Pages from "./controllers/pages.controller";

const PagesModule = Router();

const pages = new Pages()

PagesModule.route("/pages")
    .get(pages.getAll)
    .post(pages.save)

export default PagesModule;
