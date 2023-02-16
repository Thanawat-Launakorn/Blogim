import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { blogItem } from '../../../backend/models/blog'

function CreateBlogs(props: { funcShow: any }) {

    const [inputBlog, setInputBlog] = useState<Partial<blogItem>>({})
    const [changeAddBlog, setChangeAddBlog] = useState('Add Blog')
    const navigate = useNavigate()
    const [data, setData] = useState([])
    function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setInputBlog(prevItem => {
            return { ...prevItem, [event.target.name]: event.target.value }
        })
    }
    async function addBlog() {
        // await axios.post('http://localhost:3001/create', {
        //     title: inputBlog.title, body: inputBlog.body, author: inputBlog.author, image: inputBlog.image
        // })
        // setChangeAddBlog('Adding Blog...')
        // await wait(2000)
        // navigate('/')

        try {
            await axios.post('http://localhost:3000/api/blog/create', inputBlog)            
        } catch (error) {
            alert(error)
        }
        
    }
    useEffect(() => {
        props.funcShow(true)
    }, [])

    return (
        <>
            <div className='mx-auto w-full max-w-sm mt-10'>

                <form className='bg-white px-8 pt-0 pb-0 mb-4 ' onSubmit={(e) => e.preventDefault()}>
                    <div className='my-2'>
                        <h1 className='text-center text-blue-700 font-bold text-xl mb-7'>
                            Add a new Blog
                        </h1>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2'>Blog Title:</label>
                        <input
                            type="text"
                            className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                            placeholder='My Blog'
                            name='title'
                            value={inputBlog.title}
                            onChange={handleChange}
                            // autoComplete='off'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2'>Blog Body:</label>
                        <textarea
                            className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                            placeholder='Type your story'
                            name='body'
                            value={inputBlog.body}
                            onChange={handleChange}
                            // autoComplete='off'
                            required

                        />

                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-2xl font-thin mb-2'>Blog Author:</label>
                        <input
                            type="text"
                            className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                            placeholder='Enter your name'
                            name='author'
                            value={inputBlog.author}
                            onChange={handleChange}
                            // autoComplete='off'
                            required

                        />

                    </div>
                    <div className='mb-6'>
                        <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2'>Author Image:</label>
                        <input
                            type="text"
                            className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                            placeholder='Image URL'
                            name='image'
                            value={inputBlog.image}
                            onChange={handleChange}
                            // autoComplete='off'

                        />

                    </div>

                    <div className='mb-4 flex justify-center'>
                        <button
                            className='text-white bg-blue-700 hover:bg-blue-500 shadow rounded-md px-4 py-2 font-semibold text-sm'
                            onClick={addBlog}
                        >{changeAddBlog}</button>
                    </div>
                </form>

            </div>

        </>

    )
}

export default CreateBlogs