import React from 'react'
type InputTitleProps = {
  type: string,
  name: string,
  className?: string,
  value: string,
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export default function InputTitle({
  type,
  name,
  className,
  value,
  placeholder,
  onChange
}: InputTitleProps) {
  return (
    <div>
      <input {...{
        type,
        name,
        className,
        value,
        placeholder,
        onChange
      }} />
    </div>
  )
}
