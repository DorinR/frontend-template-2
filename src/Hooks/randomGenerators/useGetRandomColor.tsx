import randomColor from 'randomcolor'
import { useEffect, useState } from 'react'

export const useGetRandomColor = (hue: string) => {
    const [randomColorHex, setRandomColorHex] = useState<string>('')

    useEffect(() => {
        setRandomColorHex(randomColor({ hue: hue, luminosity: 'light' }))
    }, [hue])

    return {
        color: randomColorHex,
    }
}
