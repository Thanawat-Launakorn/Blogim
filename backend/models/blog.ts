import { v4 as uuid } from 'uuid'
export interface blogItem {
    id: string,
    title: string,
    body: string,
    author: string,
    image?: string
}

export const blog: blogItem[] = []
export let newBlog: Omit<blogItem, 'id'>[]
export function addBlog(data: Omit<blogItem, 'id'>) {
    const id = uuid()
    blog.push({
        id, ...data
    })
    newBlog = [...blog]
    return id
}