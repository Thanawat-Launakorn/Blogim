import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './inputimage.css'
import React from 'react'
type InputImageProps = {
    preview?: string,
    onClickImage: any,
    onClickButton: React.FormEvent | any,
    icon: IconDefinition,
    fileInputRef: HTMLInputElement | any
    type: string,
    accept: string,
    value?: string,
    alt: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    className: string

}
export default function InputImage({
    preview,
    onClickImage,
    onClickButton,
    icon,
    fileInputRef,
    type,
    accept,
    value,
    alt,
    onChange,
    className
}: InputImageProps) {
    return (
        <div className={`${className}`}>
            {preview ?
                <img src={preview} alt={alt} className='createImage object-cover' onClick={onClickImage} />
                :
                <button
                    className='buttonCreateImage bg-gray-200'
                    onClick={onClickButton}
                >
                    <FontAwesomeIcon icon={icon} className='bg-transparent px-2 py-2 text-4xl text-white' />

                </button>
            }
            <input
                type={type}
                className='hidden'
                ref={fileInputRef}
                accept={accept}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
