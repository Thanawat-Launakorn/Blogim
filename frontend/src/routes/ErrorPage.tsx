import React, { useEffect } from 'react'

export default function ErrorPage(props: { funcShow: any }) {

    useEffect(() => {
        props.funcShow(false)
    }, [])
    return (
        <div>ErrorPage</div>
    )
}
