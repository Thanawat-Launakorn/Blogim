import React from 'react'
import './textareaDescription.css'
type InputDescriptionProps = {
    rows: number
    name: string,
    placeholder?: string
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
    value: string,
    className?: string

}

export default function InputDescription({
    name,
    placeholder,
    onChange,
    value,
    className,
    rows
}: InputDescriptionProps) {
    return (
        <div>
            <textarea {...{
                rows,
                name,
                placeholder,
                onChange,
                value,
                className
            }} />

        </div>
    )
}