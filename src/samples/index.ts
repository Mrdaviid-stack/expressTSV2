import { Express, Router } from "express";
import Sample from "./controllers/samples.controller";

const SamplesModule = Router();

SamplesModule.route("/sample").get(Sample.get);
SamplesModule.route("/sample/all").get(Sample.get);

export default SamplesModule;
