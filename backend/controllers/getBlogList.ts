import { RequestHandler } from "express";
import { blog } from "../models/blog";
import { CommomResponseBody } from "../src";

export default <RequestHandler<unknown, CommomResponseBody>>((req, res) => {
    res.send({
        data: blog
    })
})