import { useState } from 'react'

export const useName = () => {
    const [name, setName] = useState('dorin')

    return {
        name: name,
        setName: setName,
    }
}
