import { Request, Response } from "express";
import BaseController from "../../common/controllers/BaseController";

import PagesModel from "../models/PagesModel";
import { pagesValidationsRule } from "../validator/pages.validator";


class Pages extends BaseController {
    
    constructor() {
        super({
            model: PagesModel,
            validationsRule: pagesValidationsRule,
        })
    }

}

const pages = new Pages()
export default pages as Pages;
