import React from 'react'
import { LoadingContext } from '../../context/LoadingProvider';

export default function useLoading() {
    const context = React.useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within LoadingProvider");
    }
    return context;
}