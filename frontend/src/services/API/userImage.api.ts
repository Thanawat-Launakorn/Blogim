import axios from 'axios'
import imageItem from '../../models/Iimage'
import SearchField from '../../models/IsearchField'

const BASE_URL_IMAGE = "http://localhost:3000/api/image/"

export async function UserImage(params?: SearchField) {
    if (params?.searchField) {
        return await axios.get<imageItem>(`${BASE_URL_IMAGE}search/${params.searchField}`)
    } else {
        return await axios.get<Array<imageItem>>(`${BASE_URL_IMAGE}get`)
    }
}

export async function CreateUserImage(params?: Omit<imageItem, 'id'>) {
    if (params) {
        return await axios.post<imageItem>(`${BASE_URL_IMAGE}create`, params)
    }
}

export async function UserImageId(id: string) {
    if (id) {
        return
    }
}
