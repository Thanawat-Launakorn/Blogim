import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import CreateBlogs from './pages/CreateBlog'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import CreateImage from './pages/CreateImage'
import blogItem from './models/Iblog'
import Layout from './components/Layout'
import ThemeProvider from './context/ThemeProvider'
import LoadingProvider from './context/LoadingProvider'


function App() {
  const [show, setShow] = useState(true as boolean)
  const [pathBlog, setPathBlog] = useState()
  const path = `/blog/${pathBlog}`
  const onGo = (id: Pick<blogItem, 'id'> | any) => {
    setPathBlog(id)
  }

  interface IRoute {
    path: string,
    element: React.ReactNode
  }
  const routes: Array<IRoute> = [
    { path: '/', element: <Home /> },
    { path: '/create', element: <CreateBlogs funcShow={setShow} /> },
    { path: '/createImage', element: <CreateImage /> },
    { path: `/blog/:id`, element: <BlogPage /> },
    { path: '/*', element: <ErrorPage funcShow={setShow} /> }

  ]

  return (
    <div className='fill-window '>
      <BrowserRouter>
        <ThemeProvider>
          <LoadingProvider>
            {show && <Navbar />}
            <Layout>
              <Routes>
                {routes.map(({ path, element }) => {
                  return <Route path={path} element={element} key={path} />
                })}
              </Routes>
            </Layout>
            {show && <Footer />}
          </LoadingProvider>
        </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
