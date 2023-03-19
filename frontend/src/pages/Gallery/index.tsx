import React, { useState } from 'react'
import Form from '../../components/Gallery/Form'
import InfiniteScroll from '../../components/Gallery/InfiniteScroll'
import Label from '../../components/Gallery/Label'
import Loader from '../../components/Loader'
import useLoading from '../../core/hooks/useLoading'
import imageItem from '../../models/Iimage'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from '../../components/Gallery/ImageItem'
import * as ApiUserImage from '../../services/API/userImage.api'
import InputImage from '../../components/CreateBlogPage/InputImage'
import SearchField from '../../models/IsearchField'
import { AxiosError } from 'axios'

export default function Gallery() {
  const [searchPhotographer, setSearchPhotographer] = React.useState('')
  const [images, setImages] = React.useState<imageItem[]>([])
  const [error, setError] = useState('')
  const { loading, setLoading } = useLoading()
  const delay = 3000

  const handleSearchPhotographer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhotographer(e.target.value)
  }

  const handleSearchField = React.useCallback(
    async ({ searchField }: SearchField) => {
      try {
        setLoading(true)
        if (searchField) {
          type response = {
            res?: imageItem
          }
          const { data } = await ApiUserImage.UserImage({ searchField })
          const response = data as response

          setError('')
          return

        }

        if (searchField === '') {
          type response = {
            res?: any
          }
          const { data } = await ApiUserImage.UserImage()

          const response = data as response
          console.log(response.res);
          setImages(response.res)
          setError('')
          return

        }
      }

      catch (err) {
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
        })
      }

    }, []
  )

  React.useEffect(() => {
    ; (async () => {
      handleSearchField({ searchField: searchPhotographer })
    })()
  }, [handleSearchField])

  return (
    <div className='gallery'>
      {loading
        ? <Loader
          color='blue'
          loading={loading}
          classname='w-full text-center mx-auto mt-10'
        />
        :
        <div className='mx-auto max-w-2xl w-full'>
          <Form
            SearchPhotographer={handleSearchPhotographer}
            valuePhotographer={searchPhotographer}
          />
          <Label
            icon={faUser}
            searchImage={searchPhotographer}
            className='w-full flex justify-between mb-3 p-2 mt-5'
          />
          <InfiniteScroll
            items={images}
            className='grid grid-cols-3 gap-3'
            renderItem={({ item, key }: { item: imageItem, key: string | number }) => {
              return (
                <Image
                  key={item.id}
                  author={item.author}
                  description={item.description}
                  image={item.image}
                  title={item.author}
                />
              )
            }}

          />
        </div>
      }

    </div>
  )
}
