import { RequestHandler } from "express";
import { findImage, imageItem } from "../../../models/image";
import { CommomResponseBody } from "../../../src/main";

interface RequestBody {
    id: string
}
export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const idImage = <RequestBody>req.params
    const response = findImage(idImage)
    res.send({ res : response})
})