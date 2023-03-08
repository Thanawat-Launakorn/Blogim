import React, { ChangeEventHandler } from 'react'
type InputFieldProps = {
    id: string
    type?: string
    placeholder?: string,
    className?: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,

}
export default function InputField({
    type,
    placeholder,
    className,
    value,
    onChange,
    id
}: InputFieldProps) {
    return (
        <div> <input {...{
            type,
            placeholder,
            value,
            onChange,
            id,
            className
        }} /></div >
    )
}
