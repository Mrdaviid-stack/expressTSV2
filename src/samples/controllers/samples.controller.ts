import { Request, Response } from "express";

class Sample {
    public static get(request: Request, response: Response) {
        response.send("Sample");
    }

    public static getall(request: Request, response: Response) {
        response.send("Sample All");
    }
}

export default Sample;
