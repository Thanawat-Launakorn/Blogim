import { RequestHandler } from "express";
import { addImage } from "../models/image";
import { CommomResponseBody } from "../src/main";

interface RequestBody {
    title: string,
    description: string,
    author: string,
    image: string
}
export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const id = addImage(req.body)
    res.status(201).send({ data: id })
})