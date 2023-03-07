import axios, { AxiosError } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Blog from '../../components/BlogPage/Blog';
import { useNavigate } from 'react-router-dom';
import blogItem from '../../models/Iblog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../components/Loader';
import useLoading from '../../core/hooks/useLoading';
import SearchField from '../../models/IsearchField'
import * as ApiUserBlog from '../../services/API/userBlog.api'
import useDebounce from '../../core/hooks/useDebounce';

export default function Home() {

    const [blogs, setBlogs] = useState<Partial<blogItem[]>>([])
    const [searchBlogger, setSearchBlogger] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { loading, setLoading } = useLoading();
    const debounceSearch = useDebounce(searchBlogger, 3000)



    const useStyle = {
        height: '28rem'
    }


    function test(id: Pick<blogItem, 'id'>) {
        // props.onGo(id)
        navigate(`/blog/${id}`)
    }


    const handleSearchField = useCallback(
        async ({ searchField }: SearchField) => {
            try {
                setLoading(true)
                if (searchField) {
                    const { data } = await ApiUserBlog.UserBlog({ searchField })
                    setBlogs(data)
                    setError('')
                    return
                }

                if (searchField === '') {
                    type dataProps = {
                        res?: any
                    }
                    const { data } = await ApiUserBlog.UserBlog()
                    const value = data as dataProps

                    setBlogs(value.res)
                    setError('')
                    return
                }

            } catch (err) {
                console.error('❌ Error', err)
                if (err instanceof AxiosError<{ message: string }>) {
                    setError(err?.response?.data.message || 'Error')
                } else {
                    setError('Something went wrong')
                }
            }
            finally {
                setTimeout(() => {
                    setLoading(false)
                }, 3000)
            }
        }, []
    )
    useEffect(() => {
        // props.funcShow(true)
        if (debounceSearch || debounceSearch === '') {
            ; (async () => {
                await handleSearchField({ searchField: searchBlogger })
            })()
        }
    }, [debounceSearch, handleSearchField])

    return (
        <div className='home'>

            {loading ? (<Loader color='blue' loading={loading} classname='w-full text-center mx-auto mt-10' />)
                : !error ? (
                    <div className='mx-auto w-full max-w-2xl mt-10 flex flex-col justify-center mb-10' >
                        <input
                            placeholder='Search blogger...'
                            className='mx-auto max-w-md mb-2 p-2 bg-gray-200 shadow rounded focus:bg-white'
                            value={searchBlogger}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchBlogger(e.target.value)}
                        />
                        <div className='w-full flex justify-between mb-3 p-2'>
                            <h1 className='text-2xl font-bold'>
                                {searchBlogger.length > 0 ? <div>All <span className='text-blue-700'>{searchBlogger}</span>'s Blogs</div> : 'All blogs'}

                            </h1>
                            <div>
                                <FontAwesomeIcon icon={faUser} className='text-xl text-blue-700' />
                            </div>
                        </div >
                        <div className='p-2 overflow-auto' style={useStyle}>
                            {blogs && blogs.length ?
                                blogs.filter((item: any) => item.author.includes(searchBlogger)).map((item) => {
                                    return <Blog title={item.title} author={item.author} image={item.image} key={item.id} id={item.id} onGo={test} date={item.date} />
                                }) : null}
                        </div>
                    </div>
                ) : (
                    <div>
                        <span>{error}</span>
                    </div>
                )
            }
        </div>
    )
}