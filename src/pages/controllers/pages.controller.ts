import { Request, Response } from "express";
import BaseController from "../../common/controllers/BaseController";

import PagesModel from "../models/PagesModel";
import { pagesValidationsRule } from "../validator/pages.validator";
import PagesServices from "../providers/pages.service";


class Pages extends BaseController {
    
    constructor() {
        super({
            model: PagesModel,
            validationsRule: pagesValidationsRule,
        })
    }

}

export default Pages;
