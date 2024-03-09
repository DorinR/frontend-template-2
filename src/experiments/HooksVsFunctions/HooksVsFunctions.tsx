import { useName } from './hooks/getName'

export const HooksVsFunctions = () => {
    const { name } = useName()

    return <div>Hooks and Functions {name}</div>
}
