import { Express, Router } from "express";
import Pages from "./controllers/pages.controller";

const router = Router();
const PagesModule = Router().use('/pages', router);

router.get('/', Pages.findAll);
router.post('/add', Pages.save);
router.patch('/edit/:id', Pages.save);
router.delete('/del/:id', Pages.destroy);

export default PagesModule;
