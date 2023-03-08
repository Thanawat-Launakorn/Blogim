import React from 'react'
import blogItem from '../../../models/Iblog'

type InfiniteScrollProps<T> = {
    items: Array<T>,
    renderItem: (itemProps: {
        item: T,
        idx: number,
        array: Array<T>,
        key: string | number
    }) => React.ReactNode
    className?: string
    renderEmptyList?: () => React.ReactNode
    // key: string | number
    searchBlogger: string

}
export default function InfiniteScroll({
    items,
    renderItem,
    className,
    searchBlogger,
    // key

}: InfiniteScrollProps<blogItem>) {
    return (
        <div className={`${className}`}>
            {items?.map((item, idx, array) => {
                return (
                    <React.Fragment key={item.id}>
                        {renderItem({ item, idx, array, key: item.id })}
                    </React.Fragment>
                )
            })}
        </div>
    )
}
