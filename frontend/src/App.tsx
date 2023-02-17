import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CreateBlogs from './routes/CreateBlog'
import Home from './routes/Home'
import ErrorPage from './routes/ErrorPage'
import {
  Routes,
  Route,
} from 'react-router-dom'
import BlogPage from './routes/BlogPage'
function App() {
  const element = document.documentElement
  const [theme, setTheme] = useState('light' as string)
  const [show, setShow] = useState(true as boolean)
  const [pathBlog, setPathBlog] = useState()
  const path = `/blog/${pathBlog}`
  const onGo = (id: any) => {
    setPathBlog(id)
  }
  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        break;
      case 'light':
        element.classList.remove('dark')
    }
  }, [])


  return (
    <div className='fill-window'>
      {show && <Navbar />}
      <Routes>
        <Route path='/' element={<Home funcShow={setShow} onGo={onGo} />} />
        <Route path='/create' element={<CreateBlogs funcShow={setShow} />} />
        <Route path={path} element={<BlogPage idBlog={pathBlog} />} />
        <Route path='*' element={<ErrorPage funcShow={setShow} />} />
      </Routes>
      {show && <Footer />}
    </div>
  )
}

export default App
