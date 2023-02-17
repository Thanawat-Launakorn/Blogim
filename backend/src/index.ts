import express from 'express'
import dotenv from 'dotenv'
// import proxy from 'express-http-proxy'
import cors from 'cors'
import getBlog from '../controllers/getBlogList'
import addBlog from '../controllers/addBlogList'
import getBlogId from '../controllers/getBlogIdList'
import deleteBlog from '../controllers/deleteBlogList'
const app = express()
const port = Number(process.env.PORT || 3000)
export interface CommomResponseBody {
    data?: any
}
// app.use('/', proxy('http://127.0.0.1:4000/'));
app.use(cors())
app.use(express.json())
dotenv.config()

app.get('/api/blog/get', getBlog)
app.post('/api/blog/create', addBlog)
app.get('/api/blog/get/:id', getBlogId)
app.delete('/api/blog/delete/:id', deleteBlog)

app.listen(port, () => console.log(`App listening on http://localhost:${port}/`))