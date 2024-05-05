import { useBatteryLevel } from "../../hooks/battery/useBatteryLevel";

export const HookContainer = () => {
  const { batteryLevel, isLoading } = useBatteryLevel();

  return <div>{!isLoading && batteryLevel}</div>;
};
