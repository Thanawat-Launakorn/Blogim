import React from 'react'
import imageItem from '../../../models/Iimage'

type InfiniteScrollProps<T> = {
    items: Array<T>
    renderItem: (ItemProps: {
        item: T,
        idx: number,
        key: string | number | any,
        array: Array<T>
    }) => React.ReactNode
    className?: string
    renderEmpty?: () => React.ReactNode
    style?: React.CSSProperties

}

export default function InfiniteScroll({
    items,
    renderItem,
    className,
    renderEmpty,
    style
}: InfiniteScrollProps<imageItem>) {
    return (
        <div className={`${className}`} style={style}>
            {items.map((item, idx, array) => {
                return (
                    <React.Fragment key={item.id}>
                        {renderItem({ item, idx, array, key: item.id })}
                    </React.Fragment>
                )
            })}
        </div>
    )
}