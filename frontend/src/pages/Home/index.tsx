import { AxiosError } from 'axios';
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import Blog from '../../components/HomePage/BlogItem';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import blogItem from '../../models/Iblog';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../components/Loader';
import useLoading from '../../core/hooks/useLoading';
import SearchField from '../../models/IsearchField'
import * as ApiUserBlog from '../../services/API/userBlog.API'
import useDebounce from '../../core/hooks/useDebounce';
import Form from '../../components/HomePage/Form';
import Label from '../../components/HomePage/Label';
import InfiniteScroll from '../../components/HomePage/InfiniteScroll';
export default function Home() {

    const [blogs, setBlogs] = useState<blogItem[]>([])
    const [searchBlogger, setSearchBlogger] = useState('')
    const [error, setError] = useState('')
    const { loading, setLoading } = useLoading();
    const delay = 3000 as number
    const debounceSearch = useDebounce(searchBlogger, delay)
    const useStyle = {
        height: '23rem'
    }
    const handleSearchField = useCallback(
        async ({ searchField }: SearchField) => {
            try {
                setLoading(true)
                if (searchField) {
                    type dataProps = {
                        res?: any
                    }
                    const { data } = await ApiUserBlog.UserBlog({ searchField })
                    const value = data as dataProps

                    setBlogs(value.res)
                    console.log(value.res);

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
                }, delay)
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

    const handleSearchBlogger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBlogger(e.target.value)
    }

    return (
        <div className='home'>

            {loading ? (<Loader color='blue' loading={loading} classname='w-full text-center mx-auto mt-10' />)
                : !error ? (
                    <div className='mx-auto w-full max-w-2xl mt-10 flex flex-col justify-center mb-10' >
                        <Form
                            className='mx-auto max-w-md mb-2 p-2 bg-gray-200 shadow rounded focus:bg-white'
                            onChangeSearchField={handleSearchBlogger}
                            searchBlogger={searchBlogger}
                        />
                        <hr className='mt-5' />
                        <Label
                            icon={faUser}
                            searchBlogger={searchBlogger}
                            className='w-full flex justify-between mb-3 p-2 mt-5'
                        />
                        <InfiniteScroll
                            className='p-2 overflow-auto infinite-scroll h-96'
                            items={blogs}
                            style={useStyle}
                            renderItem={({
                                item,
                                key,

                            }: {
                                item: blogItem
                                key: string | number
                            }) => (
                                <Link
                                    key={key}
                                    to={{
                                        pathname: `/blog/${key}`,
                                    }}
                                >
                                    <Blog
                                        title={item.title}
                                        author={item.author}
                                        date={item.date}
                                        image={item.image}
                                        key={key}
                                    />
                                </Link>
                            )
                            }
                        />
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