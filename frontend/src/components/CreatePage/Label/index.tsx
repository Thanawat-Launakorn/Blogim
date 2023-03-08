import React from 'react'
type LabelProps = {
    className?: string,
    label?: string
}
export default function Label({ className, label }: LabelProps) {
    return (
        <label className={`${className}`}>
            {label}
        </label>
    )
}
