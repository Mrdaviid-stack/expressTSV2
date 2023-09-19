import { Schema } from "express-validator";
import PagesModel from "../models/PagesModel";

export const pagesValidationsRule: Schema = {
    page_name: {
        custom: {
            options: async (value) => {
                const name = await PagesModel.nameExist(value)
                if (name) throw new Error("Page Name Already Exist")
            },
        },
        isLength: { 
            options: { min: 8 },
            errorMessage: 'test message'
        }
    },
}