import React from 'react'
import InputField from '../InputField'


type FormProps = {
  SearchPhotographer: React.ChangeEventHandler<HTMLInputElement>
  valuePhotographer: string
}

export default function Form({
  SearchPhotographer,
  valuePhotographer
}: FormProps) {
  return (
    <div>
      <InputField
        name='search-image'
        onChange={SearchPhotographer}
        type='text'
        value={valuePhotographer}
        className=''
        placeholder='Search Photographer...'
      />
    </div>
  )
}