import { RequestHandler } from "express";
import { deleteImage } from "../models/image";
import { CommomResponseBody } from "../src/main";
interface RequestBody {
    id: string
}
export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const id = <RequestBody>req.params
    const response = deleteImage(id)
    res.send({ data: response })
})