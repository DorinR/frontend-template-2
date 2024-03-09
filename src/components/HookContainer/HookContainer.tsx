import { useBatteryLevel } from '../../Hooks/battery/useBatteryLevel'

export const HookContainer = () => {
    const { batteryLevel, isLoading } = useBatteryLevel()

    return <div>{!isLoading && batteryLevel}</div>
}
