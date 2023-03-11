import { v4 as uuid } from 'uuid'
import { blogItem } from './blog'
export interface imageItem {
    id?: string,
    title: string,
    description: string,
    author: string,
    image: string
}

export let image: imageItem[] = []

export function addImage(data: Omit<imageItem, 'id'>) {
    const id = uuid()
    image.push({
        id, ...data
    })
    return id
}

export function findImage(data: Pick<imageItem, 'id'>) {
    const imageId = image.filter((it: imageItem) => {
        return it.id === data.id
    })
    return imageId
}

export function deleteImage(data: Pick<imageItem, 'id'>) {
    image = image.filter((it: imageItem) => {
        return it.id !== data.id
    })

    return image
}