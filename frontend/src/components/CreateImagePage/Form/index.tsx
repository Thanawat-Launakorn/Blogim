import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import React, { FormEvent, FormEventHandler } from 'react'
import InputAuthor from '../../CreateBlogPage/InputAuthor'
import ButtonImage from '../ButtonImage'
import InputDescription from '../InputDescription'
import InputImage from '../InputImage'
import InputTitle from '../InputTitle'

type FormProps = {
    className?: string
    fileInputRef: HTMLInputElement | any
    icon: IconDefinition
    onChangeImage: React.ChangeEventHandler<HTMLInputElement>
    onClickButtonImage: any
    onClickButton: any
    onClickImage: any
    preview: string
    valueInputImage: string
    onChangeTitle: React.ChangeEventHandler<HTMLInputElement>
    valueInputTitle: string
    onChangeDescription: React.ChangeEventHandler<HTMLTextAreaElement>
    valueInputDescription: string
    changeText: string
    onSubmit: FormEventHandler<HTMLFormElement>
    onChangeAuthor: React.ChangeEventHandler<HTMLInputElement>
    valueInputAuthor: string
}

export default function Form({
    className,
    fileInputRef,
    onClickButtonImage,
    icon,
    onChangeImage,
    onClickButton,
    onClickImage,
    preview,
    valueInputDescription,
    valueInputImage,
    valueInputTitle,
    changeText,
    onChangeDescription,
    onChangeTitle,
    onSubmit,
    onChangeAuthor,
    valueInputAuthor

}: FormProps) {
    return (
        <form className={`${className}`} onSubmit={onSubmit}>
            <InputImage
                accept='image/*'
                alt='image-input'
                className='w-full mx-auto overflow-hidden'
                fileInputRef={fileInputRef}
                icon={icon}
                onChange={onChangeImage}
                onClickButton={onClickButtonImage}
                onClickImage={onClickImage}
                type='file'
                preview={preview}
                value={valueInputImage}
            />

            <InputTitle
                name='title'
                onChange={onChangeTitle}
                type='text'
                value={valueInputTitle}
                className='appearance-none rounded w-full py-2 px-3 my-2 mx-2 text-gray-700 text-xl font-bold bg-transparent leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                placeholder='Card Title'

            />
            <InputDescription
                name='description'
                onChange={onChangeDescription}
                rows={2}
                value={valueInputDescription}
                placeholder='Description...'
                className='textareaDescription appearance-none rounded w-full py-2 px-3 my-0 mx-2 text-gray-700 bg-transaparent leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700ext-gray-700 text-base'

            />
            <div className='flex justify-around align-middle'>
                <ButtonImage
                    changeText={changeText}
                    onClick={onClickButton}
                    className='text-white bg-blue-700 hover:bg-blue-500 shadow rounded-md px-4 py-2 font-semibold text-xs my-2 mx-2'
                />

                <InputAuthor
                    name='author'
                    onChange={onChangeAuthor}
                    type='string'
                    autoComplete='off'
                    className='border-2 appearance-none rounded w-full px-4 py-2 my-2  text-gray-700 bg-transparent text-xs leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                    placeholder='Your name...'
                    value={valueInputAuthor}

                />
            </div>



        </form>
    )
}