import axios, { AxiosResponse } from 'axios'
import blogItem from '../../models/Iblog'
import SearchField from '../../models/IsearchField'

const BASE_URL = "http://localhost:3000/api/blog/"

export async function UserBlog(params?: SearchField) {
    if (params?.searchField) {
        return await axios.get<Array<blogItem>>(`${BASE_URL}search/${params.searchField}`)
    }
    return await axios.get<Array<blogItem>>(`${BASE_URL}get`)
}

export async function UserBlogId(id?: string) {
    return await axios.get<blogItem>(`${BASE_URL}get/${id}`)
}

export async function CreateUserBlog(params?: Pick<blogItem, 'id'>) {
    // if (params?.body && params?.author && params?.date && params?.image && params?.title)
    //     return await axios.post<blogItem>(`${BASE_URL}create`, params)

    if (params) {
        return await axios.post<blogItem>(`${BASE_URL}create`, params)
    }
}

export async function DeleteBlog(id?: string) {
    if (id) {
        return await axios.delete<blogItem>(`${BASE_URL}delete/${id}`)
    }
}
