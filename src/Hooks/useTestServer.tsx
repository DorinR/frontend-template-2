import { useState, useEffect } from 'react'

export const useTestServer = (url: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setData(res)
                setIsLoading(false)
            })
    }, [url])

    return {
        isLoading,
        data,
    }
}
