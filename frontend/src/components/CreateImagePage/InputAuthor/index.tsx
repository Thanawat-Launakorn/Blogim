import React from 'react'

type InputAuthorProps = {
    type: string
    className?: string
    placeholder?: string
    name: string,
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function index({
    type,
    className,
    placeholder,
    name,
    value,
    onChange
}: InputAuthorProps) {
    return (
        <div>
            <input {...{
                type,
                className,
                placeholder,
                name,
                value,
                onChange
            }} />
        </div>
    )
}