import { RequestHandler } from "express";
import { image } from "../../../models/image";
import { CommomResponseBody } from "../../../src/main";

export default <RequestHandler<unknown, CommomResponseBody>>((req, res) => {
    res.send({ res: image })
})