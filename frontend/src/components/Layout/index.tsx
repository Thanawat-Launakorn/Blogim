import React from 'react'
import Content from './Content';
type LayoutProps = {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
    return (
        <Content>
            {children}
        </Content>
    )
}
