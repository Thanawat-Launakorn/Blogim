import React from 'react'
type ButtonBlogProps = {
  className?: string,
  onClick: React.MouseEvent<HTMLButtonElement> | any
  changeText: string
}
export default function ButtonBlog({ className, onClick, changeText }: ButtonBlogProps) {
  return (
    <div className='text-end'>
      <button
        {...{ className, onClick }}
      >
        {changeText}
      </button>
    </div>

  )
}
