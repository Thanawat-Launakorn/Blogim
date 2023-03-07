import { RequestHandler } from "express";
import { deleteBlog } from "../../../models/blog";
import { CommomResponseBody } from "../../../src/main";
interface RequestBody {
    id: string
}
export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const idBlog = <RequestBody>req.params
    const response = deleteBlog(idBlog)
    res.send({
        res: response
    })
})