import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blogItem from '../../models/Iblog'

import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Form from '../../components/CreatePage/Form'



function CreateBlogs(props: { funcShow: any }) {

    const [inputBlog, setInputBlog] = useState<Partial<blogItem> | any>({})
    const [changeAddBlog, setChangeAddBlog] = useState('Add Blog')
    const [changeName, setChangeName] = useState('._.' as any)
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement | any>()
    const [image, setImage] = useState<File>()
    const [preview, setPreview] = useState<string | any>()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputBlog((prevItem: any) => {
            return { ...prevItem, [event.target.name]: event.target.value }
        })
    }

    const handleButtonImage = (e: React.FormEvent) => {
        e.preventDefault()
        fileInputRef.current.click()
    }

    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement> | any) => {
        const file = e.target.files[0]
        file && setImage(file)
    }

    const handleClickImage = () => {
        setPreview(null)
    }

    const handleClick = async () => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
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
        <div className='createBlog-page'>
            <div className='mx-auto w-full max-w-md mt-10 shadow-md py-3 my-3 rounded-lg mb-10'>
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

                <Form
                    changeTextButton={changeAddBlog}
                    fileInputRef={fileInputRef}
                    icon={faCamera}
                    onChangeImage={handleChangeImage}
                    onChangeInputAuthor={handleChange}
                    onChangeInputTextAreaBody={handleChange}
                    onChangeInputTitle={handleChange}
                    onClickButton={handleClick}
                    onClickButtonImage={handleButtonImage}
                    onClickImageImage={handleClickImage}
                    onSubmit={handleSubmit}
                    preview={preview}
                    valueInputAuthor={inputBlog.author}
                    valueInputImage=''
                    valueInputTitle={inputBlog.title}
                    valueTextAreaBody={inputBlog.body}
                    className='bg-white px-8 pt-4 pb-0 mb-4'
                />

            </div>

        </div>

    )
}

export default CreateBlogs