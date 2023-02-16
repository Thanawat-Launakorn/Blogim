import { RequestHandler } from "express";
import { blogItem, newBlog } from "../models/blog";
import { CommomResponseBody } from "../src";

export default <RequestHandler<unknown, CommomResponseBody>>((req, res) => {
    const item: any = req.params
    const response = newBlog.filter((it: Pick<blogItem, 'id'> | any) => {
        return it.id === item.id
    })
    res.send({ data: response })

})