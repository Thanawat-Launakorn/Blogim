import React, { useState, useEffect } from 'react'
import * as ApiUserBlog from '../../services/API/userBlog.API'
import { useNavigate, useParams } from 'react-router-dom'
import { blogItem } from '../../../../backend/models/blog';
import useLoading from '../../core/hooks/useLoading';
import Loader from '../../components/Loader';
export default function BlogPage() {



    const [blog, setBlog] = useState<blogItem[] | any>([])
    const { loading, setLoading } = useLoading()
    const { id } = useParams()
    const delay = 3000 as number
    const navigate = useNavigate()
    const useStyleBody = {
        backgroundColor: '#DCFBFF'
    }
    const useStyleImage = {
        width: '110px',
        height: '140px'
    }

    const deleteBlog = async () => {
        await ApiUserBlog.DeleteBlog(id)
        navigate('/')
    }

    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true)
                type dataProps = {
                    res?: any
                }
                const { data } = await ApiUserBlog.UserBlogId(id)
                const value = data as dataProps
                setBlog(value.res)
            }
            catch (err) {
                console.log(err);

            }

            finally {
                setTimeout(() => {
                    setLoading(loading)
                }, delay)
            }

        })()
    },
        []
    )

    return (
        <>
            {loading
                ? <Loader
                    color='blue'
                    loading={loading}
                    classname='w-full text-center mx-auto mt-10'

                /> :
                <div className='mx-auto w-full max-w-2xl  my-10'>

                    {blog.map((item: blogItem) => {
                        return (
                            <div key={item.id}>
                                <h2 className='text-blue-700 text-7xl font-bold tracking-wide'>
                                    {item.title}
                                </h2>
                                <div className='w-full flex justify-between'>
                                    <div className='relative'>
                                        <p className='text-gray-500 text-2xl font-semibold pt-4'>
                                            written by {item.author}
                                        </p>
                                        <p className='absolute bottom-0 left-0 text-blue-700 font-thin'>{item.date}</p>
                                    </div>

                                    <div className='bg-blue-700 relative rounded' style={useStyleImage}>
                                        <img src={item.image} alt="img"
                                            className='object-cover absolute top-3 px-1 w-full image'
                                        // style={useStyleImage}
                                        />
                                    </div>
                                </div>
                                <hr className='bg-blue-700 h-1 mt-3' />
                                <div className='w-full p-4 text-sm font-thin tracking-tight shadow-lg my-5' style={useStyleBody}>
                                    {item.body}
                                </div>
                                <button
                                    onClick={deleteBlog}
                                    className='text-white text-semibold text-md bg-blue-700 hover:bg-blue-500 shadow rounded-lg p-2 mt-5'
                                >delete</button>
                            </div>
                        )
                    })}
                </div >}
        </>

    )
}
