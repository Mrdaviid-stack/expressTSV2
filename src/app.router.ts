import { Express } from "express";

import PagesModule from "./pages";

function router(app: Express) {
    app.use("/pages", PagesModule);
}
export default router;
