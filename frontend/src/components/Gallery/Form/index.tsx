import React from 'react'
import InputField from '../InputField'


type FormProps = {
  SearchPhotographer: React.ChangeEventHandler<HTMLInputElement>
  valuePhotographer: string
  className?: string
}

export default function Form({
  SearchPhotographer,
  valuePhotographer,
  className
}: FormProps) {
  return (
    <div className=''>
      <InputField
        name='search-image'
        onChange={SearchPhotographer}
        type='text'
        value={valuePhotographer}
        className={className}
        placeholder='Search Photographer...'
      />
    </div>
  )
}