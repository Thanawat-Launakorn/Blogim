import React from 'react'
type InputTitleProps = {
    type: string,
    className?: string,
    placeholder?: string,
    name: string,
    value?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
export default function InputTitle({
    type,
    className,
    placeholder,
    name,
    value,
    onChange
}: InputTitleProps) {
    return (
        <div className='input-title'>
            <input {...{type, className, placeholder, name, value, onChange}} />
        </div>  
    )
}
