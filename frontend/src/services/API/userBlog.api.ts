import axios from 'axios'
import blogItem from '../../models/Iblog'
import SearchField from '../../models/IsearchField'

const BASE_URL = "http://localhost:3000/api/blog/"

export async function UserBlog(params?: SearchField) {
    if (params?.searchField) {
        return await axios.get<Array<blogItem>>(`${BASE_URL}search/${params.searchField}`)
    }
    return await axios.get<Array<blogItem>>(`${BASE_URL}get`)
}

export async function UserBlogId(id: any) {
    return await axios.get<blogItem>(`${BASE_URL}get/${id}`)
}