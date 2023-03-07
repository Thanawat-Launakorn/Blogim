import { RequestHandler } from "express";
import { blog } from "../../../models/blog";
import { CommomResponseBody } from "../../../src/main";

export default <RequestHandler<unknown, CommomResponseBody>>((req, res) => {
    res.send({
        res: blog
    })
})