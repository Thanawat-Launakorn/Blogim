import React from 'react'
type ButtonImageProps = {
    className?: string,
    onClick: React.MouseEvent<HTMLButtonElement> | any
    changeText: string
}
export default function ButtonBlog({ className, onClick, changeText }: ButtonImageProps) {
    return (
        <div className='text-start'>
            <button
                {...{ className, onClick }}
            >
                {changeText}
            </button>
        </div>

    )
}
