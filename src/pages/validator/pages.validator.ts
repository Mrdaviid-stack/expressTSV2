import { Schema } from "express-validator";
import PagesModel from "../models/PagesModel";

export const pagesValidationsRule: Schema = {
    page_name: {
        isLength: { 
            options: { min: 8 },
            errorMessage: 'test message'
        }
    },
}