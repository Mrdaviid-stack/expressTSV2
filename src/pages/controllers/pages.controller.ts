import { Request, Response } from "express";
import BaseController from "../../common/controllers/BaseController";

import PagesModel from "../models/PagesModel";

import PagesServices from "../providers/pages.service";

class Pages extends BaseController {
    constructor() {
        super(PagesModel);
    }

    public static get(request: Request, response: Response) {
        response.send(PagesServices.get());
    }
}

export default Pages;
