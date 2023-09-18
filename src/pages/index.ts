import { Express, Router } from "express";
import Pages from "./controllers/pages.controller";

const router = Router();
const PagesModule = Router().use('/pages', router);

const pages = new Pages()

router.get('/', pages.getAll);
router.post('/add', pages.save);

export default PagesModule;
