import { Express, Router } from "express";
import Pages from "./controllers/pages.controller";

const PagesModule = Router();

PagesModule.get("/", Pages.get);

export default PagesModule;
