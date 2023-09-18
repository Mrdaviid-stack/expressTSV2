import { Request, Response } from "express";

import PagesModel from "../models/PagesModel";

import PagesServices from "../providers/pages.service";
import BaseController from "../../common/controllers/BaseController";

class Pages extends BaseController {
    
    constructor() {
        super(new PagesModel())
    }

}

export default Pages;
