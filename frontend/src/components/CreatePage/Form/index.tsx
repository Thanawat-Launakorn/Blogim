import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import React, { FormEventHandler } from 'react'
import ButtonBlog from '../ButtonBlog'
import InputAuthor from '../InputAuthor'
import InputImage from '../InputImage'
import InputTitle from '../InputTitle'
import TextAreaBody from '../TextAreaBody'
import LabelBlog from '../Label'
type FormProps = {
    className?: string,
    onSubmit: FormEventHandler<HTMLFormElement>
    fileInputRef: HTMLInputElement | any,
    icon: IconDefinition,
    onChangeImage: React.ChangeEventHandler<HTMLInputElement>,
    onChangeInputAuthor: React.ChangeEventHandler<HTMLInputElement>,
    onChangeInputTitle: React.ChangeEventHandler<HTMLInputElement>,
    onChangeInputTextAreaBody: React.ChangeEventHandler<HTMLTextAreaElement>,
    preview: string
    onClickButtonImage: any,
    onClickImageImage: any,
    valueInputImage?: string,
    valueInputAuthor?: string,
    valueInputTitle?: string,
    valueTextAreaBody?: string
    changeTextButton: string,
    onClickButton: any

}
export default function Form({
    className,
    onSubmit,
    fileInputRef,
    icon,
    onChangeImage,
    onChangeInputAuthor,
    onChangeInputTextAreaBody,
    onChangeInputTitle,
    onClickButtonImage,
    onClickImageImage,
    valueInputAuthor,
    valueInputImage,
    valueInputTitle,
    valueTextAreaBody,
    preview,
    changeTextButton,
    onClickButton
}: FormProps) {
    return (
        <form className={`${className}`} {...{ onSubmit }}>
            <InputImage
                accept='image/*'
                alt='image-input'
                fileInputRef={fileInputRef}
                icon={icon}
                onChange={onChangeImage}
                onClickButton={onClickButtonImage}
                onClickImage={onClickImageImage}
                type='file'
                value={valueInputImage}
                preview={preview}
                className='w-full mx-auto buttonImage'


            />
            <LabelBlog
                className='block uppercase tracking-wide text-gray-700 text-xs font-semibold my-2'
                label='author : '
            />
            <InputAuthor
                name='author'
                onChange={onChangeInputAuthor}
                type='text'
                value={valueInputAuthor}
                className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                placeholder='Your name'
                autoComplete='off'
            />

            <LabelBlog
                className='block uppercase tracking-wide text-gray-700 text-xs font-semibold my-2'
                label='title : '
            />
            <InputTitle
                name='title'
                onChange={onChangeInputTitle}
                type='text'
                value={valueInputTitle}
                className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                placeholder='My blog'
                autoComplete='off'

            />

            <LabelBlog
                className='block uppercase tracking-wide text-gray-700 text-xs font-semibold my-2'
                label='body : '
            />
            <TextAreaBody
                name='body'
                onChange={onChangeInputTextAreaBody}
                rows={4}
                value={valueTextAreaBody}
                className='border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700'
                placeholder='Type your story'
            />
            <ButtonBlog
                changeText={changeTextButton}
                onClick={onClickButton}
                className='text-white bg-blue-700 hover:bg-blue-500 shadow rounded-md px-4 py-2 font-semibold text-sm my-2 '
            />
        </form>
    )
}
