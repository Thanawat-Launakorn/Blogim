import React from 'react'

type InputFieldProps = {
    className?: string
    type: string
    name: string
    placeholder?: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}

export default function InputField({
    className,
    type,
    name,
    placeholder,
    onChange,
    value
}: InputFieldProps) {
    return (
        <div>
            <input {...{
                className,
                type,
                name,
                placeholder,
                onChange,
                value
            }} />
        </div>
    )
}