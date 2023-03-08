import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    onChange: React.ChangeEventHandler<HTMLInputElement>

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
    onChange
}: InputImageProps) {
    return (
        <div>
            {preview ?
                <img src={preview} alt={alt} className='Image object-cover' {...onClickImage} />
                :
                <button
                    className='buttonImage bg-gray-200'
                    {...onClickButton}
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
                {...{ onChange }}
               />
        </div>
    )
}
