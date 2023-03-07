import { RequestHandler } from "express";
import { CommomResponseBody } from "../../../src/main";

export default <RequestHandler<unknown, CommomResponseBody, unknown>>((req, res) => {
    res.send({ res: null })
})