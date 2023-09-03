import { Request, Response } from "express";

import PagesServices from "../providers/pages.service";

class Pages {
    public static get(request: Request, response: Response) {
        response.send(PagesServices.get());
    }
}

export default Pages;
