import axios, { AxiosResponse } from 'axios'
import blogItem from '../../models/Iblog'
import SearchField from '../../models/IsearchField'

const BASE_URL_BLOG = "http://localhost:3000/api/blog/"

export async function UserBlog(params?: SearchField) {
    if (params?.searchField) {
        return await axios.get<Array<blogItem>>(`${BASE_URL_BLOG}search/${params.searchField}`)
    }
    return await axios.get<Array<blogItem>>(`${BASE_URL_BLOG}get`)
}

export async function UserBlogId(id?: string) {
    return await axios.get<blogItem>(`${BASE_URL_BLOG}get/${id}`)
}

export async function CreateUserBlog(params?: Omit<blogItem, 'id'>) {
    if (params) {
        return await axios.post<blogItem>(`${BASE_URL_BLOG}create`, params)
    }
}

export async function DeleteBlog(id?: string) {
    if (id) {
        return await axios.delete<blogItem>(`${BASE_URL_BLOG}delete/${id}`)
    }
}
