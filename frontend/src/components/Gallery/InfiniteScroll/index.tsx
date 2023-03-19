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
            <div id="controls-carousel" className="relative" data-carousel="static">
                {items.map((item, idx, array) => {
                    return (
                        <React.Fragment key={item.id}>
                            {renderItem({ item, idx, array, key: item.id })}
                        </React.Fragment>
                    )
                })}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

        </div>
    )
}