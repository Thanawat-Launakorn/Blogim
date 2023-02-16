import { RequestHandler } from "express";
import { blog, newBlog } from "../models/blog";
import { CommomResponseBody } from "../src";

export default <RequestHandler<unknown, CommomResponseBody>>((req, res) => {
    res.send({
        data: newBlog
    })
})