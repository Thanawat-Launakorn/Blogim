import React, { useState, useRef, FormEvent } from 'react'
import Form from '../../components/CreateImagePage/Form'
import imageItem from '../../models/Iimage'
import { Navigate, useNavigate } from 'react-router-dom'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import * as ApiUserImage from '../../services/API/userImage.api'
import { wait } from '../../utils'

export default function CreateImage() {
  const [inputImage, setInputImage] = useState<Partial<imageItem> | any>({})
  const [changeAddImage, setChangeAddImage] = useState('Add Image' as string)
  const [image, setImage] = useState<File>()
  const fileInputRef = useRef<HTMLInputElement | any>()
  const [preview, setPreview] = useState<string | any>()
  const [err, setError] = React.useState('')
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputImage((prevImage: imageItem | any) => {
      return { ...prevImage, [e.target.name]: e.target.value }
    })
  }

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const file = e.target.files[0]
    file && setImage(file)
  }

  const handleClickImage = () => {
    setPreview(null)
  }

  const handleButtonImage = (e: React.FormEvent) => {
    e.preventDefault()
    fileInputRef.current.click()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const handleClick = async () => {
    try {
      await ApiUserImage.CreateUserImage(inputImage)
      setChangeAddImage('Adding Image...')
      await wait(200)
      setError('')

    } catch (error) {
      alert(error)
      console.error('❌ Error', error)
      setError('Something went wrong')
    }

    finally {
      navigate('/gallery')
    }
  }

  React.useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(image)
      reader.onload = () => {
        inputImage.image = reader.result
      }

    } else {
      setPreview(null)
    }

  }, [image])

  return (
    <>
      <div className='mx-auto w-full max-w-xs
       mt-20 mb-24'>
        <Form
          onSubmit={handleSubmit}
          changeText={changeAddImage}
          fileInputRef={fileInputRef}
          onClickButtonImage={handleButtonImage}
          icon={faCamera}
          onChangeDescription={handleChange}
          onChangeImage={handleChangeImage}
          onChangeTitle={handleChange}
          onClickButton={handleClick}
          onClickImage={handleClickImage}
          onChangeAuthor={handleChange}
          preview={preview}
          valueInputDescription={inputImage.description}
          valueInputImage={''}
          valueInputTitle={inputImage.title}
          valueInputAuthor={inputImage.author}
          className='bg-white shadow rounded-xl'
        />
      </div>
    </>
  )
}
