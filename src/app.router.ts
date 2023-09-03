import { Express } from "express";

import PagesModule from "./pages";
import SamplesModule from "./samples";

function router(app: Express) {
    app.use(PagesModule);
    app.use(SamplesModule);
}
export default router;
