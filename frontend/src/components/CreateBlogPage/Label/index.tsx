import React from 'react'
type LabelProps = {
    className?: string,
    label: string
}
export default function LabelBlog({ className, label }: LabelProps) {
    return (
        <div className='label'>
            <label className={`${className}`}>
                {label}
            </label>
        </div>

    )
}
