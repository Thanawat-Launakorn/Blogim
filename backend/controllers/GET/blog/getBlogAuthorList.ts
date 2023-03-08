import { RequestHandler } from "express";
import { searchBlog } from "../../../models/blog";
import { CommomResponseBody } from "../../../src/main";

interface RequestBody {
    author: string
}
export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const authorBlog = <RequestBody>req.params
    const response = searchBlog(authorBlog)
    res.send({ res: response })
})