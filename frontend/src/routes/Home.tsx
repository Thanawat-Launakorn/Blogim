import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from '../components/Blog';
import { useNavigate } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader'
import { blogItem } from '../../../backend/models/blog';

function Home(props: { funcShow: any, onGo: any }) {

    const [blog, setBlog] = useState<blogItem[]>([])
    const [searchBlogger, setSearchBlogger] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const useStyle = {
        height: '28rem'
    }

    const getBlog = async () => {
        const res = await axios.get('http://localhost:3000/api/blog/get')
        setBlog(res.data.data)
    }
    useEffect(() => {
        props.funcShow(true)
        setTimeout(() => {
            setLoading(false)
            getBlog()
        }, 3000)

    }, [])

    function test(id: any) {
        props.onGo(id)
        navigate(`/blog/${id}`)
    }

    return (
        <>
            {loading ? <PropagateLoader color={'blue'} loading={loading} className='w-full text-center h-10 mt-10 mx-auto' /> :
                <div className='mx-auto w-full max-w-2xl mt-10 flex flex-col justify-center mb-10'>
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
                            <i className="fas fa-book" ></i>
                        </div>
                    </div >
                    <div className='p-2 overflow-auto' style={useStyle}>
                        {blog && blog.length ?
                            blog.filter((item) => item.author.includes(searchBlogger)).map((item, index) => {
                                return <Blog title={item.title} author={item.author} image={item.image} key={item.id} id={item.id} onGo={test} date={item.date} />
                            }) : null}
                    </div>

                </div >
            }
        </>


    )
}

export default Home