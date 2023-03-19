import express, { application, Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import getBlog from '../controllers/GET/blog/getBlogList'
import addBlog from '../controllers/POST/blog/addBlogList'
import getBlogId from '../controllers/GET/blog/getBlogIdList'
import deleteBlog from '../controllers/DELETE/blog/deleteBlogList'
import getImage from '../controllers/GET/image/getImageList'
import addImage from '../controllers/POST/image/addImageList'
import getImageId from '../controllers/GET/image/getImageIdList'
import deleteImage from '../controllers/DELETE/image/deleteImageList'
import getBlogAuthor from '../controllers/GET/blog/getBlogAuthorList'
const app = express()
const port = Number(process.env.PORT || 3000)
export interface CommomResponseBody {
    res?: any
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
app.get('/api/blog/search/:author', getBlogAuthor)
app.delete('/api/blog/delete/:id', deleteBlog)

//imageRoute
app.get('/api/image/get', getImage)
app.post('/api/image/create', addImage)
app.get('/api/image/get/:id', getImageId)
app.get('/api/image/search/:author', )
app.delete('/api/image/delete/:id', deleteImage)


app.listen(port, () => console.log(`App listening on http://localhost:${port}/api/blog/get`))