import { RequestHandler } from "express";
import { searchAuthor } from "../../../models/image";
import { CommomResponseBody } from "../../../src/main";
interface RequestBody {
    author: string
}

export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const authorImage = <RequestBody>req.params
    const response = searchAuthor(authorImage)
    res.send({ res: response })
})