import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blogItem from '../models/Iblog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'



function CreateBlogs(props: { funcShow: any }) {

    const [inputBlog, setInputBlog] = useState<Partial<blogItem> | any>({})
    const [changeAddBlog, setChangeAddBlog] = useState('Add Blog')
    const [changeName, setChangeName] = useState('._.' as string)
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement | any>()
    const [image, setImage] = useState<File>()
    const [preview, setPreview] = useState<string | any>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputBlog((prevItem: any) => {
            return { ...prevItem, [event.target.name]: event.target.value }
        })
    }
    async function addBlog() {

        try {
            const wait = (ms: number) => new Promise((empty: TimerHandler) => setTimeout(empty, ms));
            const date = new Date().getDate()
            const month = new Date().getMonth() + 1
            const year = new Date().getFullYear().toString().slice(2)
            const hour = new Date().getHours()
            const minute = new Date().getMinutes()
            inputBlog.date = `${date}.${month}.${year}, ${hour}:${minute > 9 ? minute : '0' + minute.toString()}`
            await axios.post('http://localhost:3000/api/blog/create', inputBlog)
            setChangeAddBlog('Adding Blog...')
            setChangeName(inputBlog.author)
            await wait(2000)
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        props.funcShow(true)
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(image)
            reader.onload = () => {
                inputBlog.image = reader.result

            }

        } else {
            setPreview(null)
        }

    }, [image])

    return (
        <>
            <div className='mx-auto w-full max-w-2xl mt-10 shadow-md py-3 my-3 rounded-lg mb-10'>
                <div className='my-2'>
                    <h1 className='text-start text-black font-bold text-xl mb-7 px-8 uppercase'>
                        {inputBlog.author === changeName
                            ?
                            <div className='flex'>
                                <div>Hi&nbsp;</div>
                                <span className='text-blue-700'>{changeName}&nbsp;</span>
                                <div>welcome to blogim!</div>
                            </div>
                            :
                            <div className='flex'>
                                <div>Hello&nbsp;</div>
                                <span className='text-blue-700'>{changeName}&nbsp;</span>
                                <div>what 's your name ?</div>
                            </div>
                        }

                    </h1>
                    <hr className='w-full' />

                </div>
                <form className='bg-white px-8 pt-4 pb-0 mb-4 ' onSubmit={(e) => e.preventDefault()}>

                    <div className='mb-4 flex justify-start'>
                        <div>
                            {preview ?
                                <img src={preview} alt="" className='Image object-cover' onClick={() => setPreview(null)} />
                                :
                                <button
                                    className='buttonImage bg-gray-200'
                                    onClick={(e: React.FormEvent) => {
                                        e.preventDefault()
                                        fileInputRef.current.click()
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCamera} className='bg-transparent px-2 py-2 text-4xl text-white' />

                                </button>
                            }
                            <input
                                type="file"
                                className='hidden'
                                ref={fileInputRef}
                                accept='image/*'
                                value={''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement> | any) => {
                                    const file = e.target.files[0]
                                    file && setImage(file)

                                }} />

                        </div>
                        <div className='ml-8 '>
                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2'>blog author:</label>
                            <input
                                type="text"
                                className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                                placeholder='Your name'
                                name='author'
                                value={inputBlog.author}
                                onChange={handleChange}
                            // autoComplete='off'
                            // required
                            />
                            <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-xs font-semibold my-2'>Blog Title:</label>
                            <input
                                type="text"
                                className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                                placeholder='My Blog'
                                name='title'
                                value={inputBlog.title}
                                onChange={handleChange}
                            // autoComplete='off'
                            // required
                            />
                        </div>
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
                            rows={7}
                        // required

                        />

                    </div>
                    {/* <div className='mb-4'>
                        <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2'>Blog Author:</label>
                        <input
                            type="text"
                            className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                            placeholder='Enter your name'
                            name='author'
                            value={inputBlog.author}
                            onChange={handleChange}
                        // autoComplete='off'
                        // required

                        />

                    </div> */}


                    <div className='mb-4 flex justify-end'>
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