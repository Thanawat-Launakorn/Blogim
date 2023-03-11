import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div className='mx-auto max-w-lg text-center errorPage'>
            <h1 className='text-blue-700 font-extrabold text-9xl tracking-tighter'>
                Oops!
            </h1>
            <h4 className='text-black font-bold text-2xl uppercase'>
                404 - page not found
            </h4>
            <p className='text-gray-600 font-light text-md tracking-tight'>
                The page you are looking for might have been removed<br></br> had its name changed or is temporarily unavalible.
            </p>
            <button
                className='text-gray-200 bg-blue-700 rounded-full px-4 py-3 uppercase shadow-lg hover:bg-blue-500'
                onClick={() => navigate('/')}
            >
                go to homepage
            </button>
        </div>
    )
}
