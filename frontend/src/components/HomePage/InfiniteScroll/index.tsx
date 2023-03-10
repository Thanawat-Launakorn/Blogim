import React from 'react'
import blogItem from '../../../models/Iblog'

type InfiniteScrollProps<T> = {
    items: Array<T>,
    renderItem: (itemProps: {
        item: T,
        idx: number,
        array: Array<T>,
        key: string | number
    }) => React.ReactNode,
    className?: string,
    renderEmptyList?: () => React.ReactNode,
    style: React.CSSProperties


}
export default function InfiniteScroll({
    items,
    renderItem,
    className,
    style,

    // key

}: InfiniteScrollProps<blogItem>): JSX.Element {
    return (
        <div className={`${className}`} style={style}>
            {items?.map((item, idx, array) => {
                return (
                    <React.Fragment key={item.id}>
                        {renderItem({ item, idx, array, key: item.id })}
                    </React.Fragment>
                )
            })}
        </div >
    )
}
