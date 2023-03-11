import React from 'react'
import '../TextAreaBody/textareabody.css'
type TextAreaBodyProps = {
    className?: string,
    placeholder?: string,
    name: string,
    value?: string,
    rows: number,

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
        <div className=''>
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
