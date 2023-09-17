import { Request, Response } from "express";
import BaseModel from "../models/BaseModel";

/**
 * @author Mark David Bogayan <mrkdvdbgyn@gmail.com>
 */

class BaseController {
    model;
    constructor(model: BaseModel) {
        this.model = model;
    }

    async test(request: Request, response: Response): Promise<any> {
        response.send("test");
    }

    ///////////////////////////////////////////////////////////////
    async getAll(request: Request, response: Response): Promise<any> {
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
    async getById(request: Request, response: Response): Promise<any> {
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
    async save(request: Request, response: Response): Promise<any> {
        const { body, method } = request;

        if (method !== "POST" && method !== "PATCH")
            return response.sendStatus(500);

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
    async destroy(request: Request, response: Response): Promise<any> {
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
