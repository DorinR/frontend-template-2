import { useEffect, useState } from 'react'

// not functional, the API is not supported in all browsers
export const useBatteryLevel = () => {
    const [batteryLevel] = useState(50)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getBatteryLevel = async () => {
            setIsLoading(true)
            // const batteryManagerObject = await window.navigator.getBattery()
            // setBatteryLevel(batteryManagerObject.level)
            setIsLoading(false)
        }
        getBatteryLevel()
    }, [])

    return {
        batteryLevel,
        isLoading,
    }
}
