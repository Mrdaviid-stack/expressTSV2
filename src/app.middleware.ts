import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import momentTimzone from "moment-timezone";

function middleware(app: Express) {
    app.use(
        cors({
            origin: process.env.WHITELIST,
            optionsSuccessStatus: 200,
        }),
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
        morgan((tokens, req, res) => {
            return [
                `[${momentTimzone().tz("Asia/Manila")}]`,
                tokens.method(req, res),
                tokens.url(req, res),
                tokens.status(req, res),
                tokens.res(req, res, "content-length"),
                "-",
                tokens["response-time"](req, res),
                "ms",
                "-",
                `remote-address=${tokens["remote-addr"](req, res)}`,
                "-",
                `user-agent=${tokens["user-agent"](req, res)}`,
            ].join(" ");
        }),
    );
}

export default middleware;
