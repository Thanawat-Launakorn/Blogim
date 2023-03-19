import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Layout/Header'
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
import Layout from './components/Layout'
import ThemeProvider from './context/ThemeProvider'
import LoadingProvider from './context/LoadingProvider'
import Gallery from './pages/Gallery'


function App() {



  interface IRoute {
    path: string,
    element: React.ReactNode
  }
  const routes: Array<IRoute> = [
    { path: '/', element: <Home /> },
    { path: '/create', element: <CreateBlogs /> },
    { path: '/createImage', element: <CreateImage /> },
    { path: '/gallery', element: <Gallery /> },
    { path: `/blog/:id`, element: <BlogPage /> },
    { path: '/*', element: <ErrorPage /> }

  ]

  return (
    <div className='fill-window'>
      <BrowserRouter>
        <ThemeProvider>
          <LoadingProvider>
            <Navbar />
            <Layout>
              <Routes>
                {routes.map(({ path, element }) => {
                  return (
                    <>
                      <Route path={path} element={element} key={path} />
                    </>
                  )
                })
                }
              </Routes>
            </Layout>
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </BrowserRouter>

    </div>
  )
}

export default App
