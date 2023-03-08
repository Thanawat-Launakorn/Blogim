import React, { ChangeEventHandler, FormEventHandler } from 'react'
import InputField from '../InputField'
type FormProps = {
    className: string,
    onSubmit?: FormEventHandler<HTMLFormElement>
    onChangeSearchField: ChangeEventHandler<HTMLInputElement>
    searchBlogger: string
}
export default function Form({
    className,
    onSubmit,
    onChangeSearchField,
    searchBlogger
}: FormProps) {
    return (
        <form onSubmit={onSubmit} className='mx-auto'>
            <InputField
                className={className}
                onChange={onChangeSearchField}
                placeholder='Search Blogger...'
                type='text'
                value={searchBlogger}
                id='input-search-blogger'
            />
        </form>
    )
}
