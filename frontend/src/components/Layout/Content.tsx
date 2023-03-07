import React from 'react'
type LayoutProps = {
    children: React.ReactNode
}
export default function Content({ children }: LayoutProps) {
    return (
        <div>{children}</div>
    )
}
