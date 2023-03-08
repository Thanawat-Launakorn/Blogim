import React from 'react'
type authorProps = {
  type: string,
  className?: string,
  placeholder?: string,
  name: string,
  value?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export default function InputAuthor({
  type,
  className,
  placeholder,
  name,
  value,
  onChange
}: authorProps) {
  return (
    <div className='input-author'>
      <input {...{ type, className, placeholder, name, value, onChange }} />
    </div>
  )
}
