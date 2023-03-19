import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import blogItem from '../../models/Iblog'
import * as ApiUserBlog from '../../services/API/userBlog.api'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import Form from '../../components/CreateBlogPage/Form'
import { wait } from '../../utils'



export default function CreateBlogs() {

    const [inputBlog, setInputBlog] = useState<Partial<blogItem> | any>({})
    const [changeAddBlog, setChangeAddBlog] = useState('Add Blog')
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement | any>()
    const [image, setImage] = useState<File>()
    const [preview, setPreview] = useState<string | any>()
    const [error, setError] = useState('')
    
    
    const createAutoDate = () => {
        const date = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear().toString().slice(2)
        const hour = new Date().getHours()
        const minute = new Date().getMinutes()
        inputBlog.date = `${date}.${month}.${year}, ${hour}:${minute > 9 ? minute : '0' + minute.toString()}`
    }

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
            createAutoDate()
            await ApiUserBlog.CreateUserBlog(inputBlog)
            setChangeAddBlog('Adding Blog...')
            await wait(2000)
            setError('')

        } catch (error) {
            alert(error)
            console.error('❌ Error', error)
            setError('Something went wrong')
        }

        finally {
            navigate('/')
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }



    useEffect(() => {
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
            <div className='mx-auto w-full max-w-sm mt-10 mb-14'>

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
                    className='bg-white px-8 py-5'
                />
            </div>

        </div>

    )
}

