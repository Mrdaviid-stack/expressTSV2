'use strict'

import { Request, Response } from "express";
import _ from "lodash";
import { checkSchema, Schema } from "express-validator/src/middlewares/schema";
import BaseModel from "../models/BaseModel";

import { formatValidationsError } from "../helpers/helpers"

/**
 * @author Mark David Bogayan <mrkdvdbgyn@gmail.com>
 */

type ConstructorType = {
    model: BaseModel;
    validationsRule?: Schema;
}

class BaseController {
    private model;
    private validationsRule
    constructor({ model, validationsRule }: ConstructorType) {
        this.model = model;
        if (! this.validationsRule)
            this.validationsRule = {}
        this.validationsRule = validationsRule
    }

    ///////////////////////////////////////////////////////////////
    public findAll = async (request: Request, response: Response): Promise<any> => {
        let { page, limit } = request.query;

        const records = await this.model.findAll(Number(page), Number(limit));

        if (records === null) return response.sendStatus(500);

        response.status(200).json({
            error: false,
            message: "query successful",
            data: records,
        });
    }

    ///////////////////////////////////////////////////////////////v
    public findById = async (request: Request, response: Response): Promise<any> => {
        const { id } = request.params;

        const record = await this.model.find(id);

        if (record === 0) return response.sendStatus(500);

        response.status(200).json({
            error: false,
            message: "query successful",
            data: record,
        });
    }

    ///////////////////////////////////////////////////////////////
    public save = async (request: Request, response: Response): Promise<any> => {
        const { body, method } = request;
        if (method !== "POST" && method !== "PATCH")
            return response.sendStatus(500);

        // if validationRule is not provided skip this validation.
        if (! _.isEmpty(this.validationsRule)) {

            const validate = await checkSchema(this.validationsRule).run(request)

            if (! validate[0].isEmpty()) {
                const result = formatValidationsError(validate[0].formatWith(error => error.msg as string))
                return response.status(403).json({
                    error: true,
                    message: 'Validation found',
                    data: result
                })
            }
        }

        const isPost = method === "POST";
        const { id } = request.params;

        const result = await (isPost
            ? this.model.insert(body)
            : this.model.update(id, body));

        if (result === null) return response.sendStatus(500);

        response.status(isPost ? 201 : 200).json({
            message: `successfully ${isPost ? "added" : "edited"} ${
                this.model.singularName
            }`,
            data: result,
        });
    }

    ///////////////////////////////////////////////////////////////
    public destroy = async (request: Request, response: Response): Promise<any> => {
        const { id } = request.params;

        const deleteResult = await this.model.delete(id);

        if (deleteResult === 0)
            return response.status(404).json({
                error: true,
                message: `${this.model.singularName} with given ID does not exist`,
            });

        if (deleteResult === null) return response.sendStatus(500);

        response.status(200).json({
            message: `successfully deleted ${this.model.singularName}`,
        });
    }
}

export default BaseController;
