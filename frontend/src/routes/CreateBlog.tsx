import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

        try {
            const wait = (ms: number) => new Promise(empty => setTimeout(empty, ms));
            const date = new Date().getDate()
            const month = new Date().getMonth() + 1
            const year = new Date().getFullYear().toString().slice(2)
            const hour = new Date().getHours()
            const minute = new Date().getMinutes()
            inputBlog.date = `${date}.${month}.${year}, ${hour}:${minute > 9 ? minute : '0' + minute.toString()}`
            await axios.post('http://localhost:3000/api/blog/create', inputBlog)
            setChangeAddBlog('Adding Blog...')
            await wait(2000)
            navigate('/')
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
                            rows={5}
                            required

                        />

                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2'>Blog Author:</label>
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