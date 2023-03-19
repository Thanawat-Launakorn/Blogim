import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeProvider';
// 
export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext)
    const isDark = theme === 'dark'
    // <i class="fa-solid fa-moon"></i> ##moon
    // <i class="fa-solid fa-lightbulb"></i> ##light
    // <i className="fa-brands fa-github">< ##github


    return (

        <nav className="px-2 sm:px-4 py-3 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://blogim-client.onrender.com/" className="flex items-center">
                    <h1>
                        <span className="text-blue-700 self-center text-5xl font-bold whitespace-nowrap lg:ml-20">Blogim!</span>
                    </h1>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xs md:font-medium  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='bg-blue-700 text-white rounded shadow px-4 py-2 '>
                            <NavLink end to='/'>Home</NavLink>
                        </li>
                        <li className='bg-blue-700 text-white rounded shadow px-4 py-2 '>
                            <NavLink to='/create'>New Blog</NavLink>
                        </li>
                        <li className='bg-blue-300 text-white rounded shadow px-4 py-2 '>
                            <NavLink to='/gallery'>Gallery</NavLink>

                        </li>
                        <li className='bg-blue-300 text-white rounded shadow px-4 py-2 '>
                            <NavLink to='/createImage'>New Image</NavLink>
                        </li>
                        <li>
                            <i className="fas fa-moon"></i> <button type='button' onClick={() => {
                                setTheme && setTheme(isDark ? 'light' : 'dark')
                            }}>Dark</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    )
}

