import express, { Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import getBlog from '../controllers/getBlogList'
import addBlog from '../controllers/addBlogList'
import getBlogId from '../controllers/getBlogIdList'
import deleteBlog from '../controllers/deleteBlogList'
import getImage from '../controllers/getImageList'
import addImage from '../controllers/addImageList'
import getImageId from '../controllers/getImageIdList'
import deleteImage from '../controllers/deleteImageList'
const app = express()
const port = Number(process.env.PORT || 3000)
export interface CommomResponseBody {
    data?: any
}

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cors())
app.use(express.json())

dotenv.config()

//blogRoute
app.get('/api/blog/get', getBlog)
app.post('/api/blog/create', addBlog)
app.get('/api/blog/get/:id', getBlogId)
app.delete('/api/blog/delete/:id', deleteBlog)

//imageRoute
app.get('/api/image/get', getImage)
app.post('/api/blog/create', addImage)
app.get('/api/blog/get/:id', getImageId)
app.delete('/api/blog/delete/:id', deleteImage)


app.listen(port, () => console.log(`App listening on http://localhost:${port}/`))