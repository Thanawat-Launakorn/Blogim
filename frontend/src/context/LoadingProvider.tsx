import React, { useState, useEffect } from 'react'
import blogItem from '../models/Iblog'

type LoadingProviderProps = {
    children: React.ReactNode
}

interface LoadingContextProps {
    loading: boolean,
    setLoading?: React.Dispatch<React.SetStateAction<boolean>> | any
}

export const LoadingContext = React.createContext<LoadingContextProps>({
    loading: false,
    setLoading: null
})

export default function LoadingProvider({ children }: LoadingProviderProps) {
    const [loading, setLoading] = useState(false as boolean)
    const value = { loading, setLoading }
    return (
        <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
    )
}