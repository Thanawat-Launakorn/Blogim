import React from 'react'
type TextAreaBodyProps = {
    className?: string,
    placeholder?: string,
    name: string,
    value?: string,
    rows: number
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}
export default function TextAreaBody({
    className,
    placeholder,
    name,
    value,
    rows,
    onChange
}: TextAreaBodyProps) {
    return (
        <div className='textarea'>
            <textarea
                {...{
                    className,
                    placeholder,
                    name,
                    value,
                    rows,
                    onChange
                }}
            />
        </div>
    )
}
