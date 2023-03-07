import { RequestHandler } from "express";
import { blogItem, findBlog } from "../../../models/blog";
import { CommomResponseBody } from "../../../src/main";
interface RequestBody {
    id: string
}
export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const idBlog = <RequestBody>req.params
    const response = findBlog(idBlog)
    res.send({ res: response })

})