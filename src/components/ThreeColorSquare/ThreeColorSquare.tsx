import { Button } from '@blueprintjs/core'
import { useState } from 'react'
import styled from 'styled-components'

type SquareColor = 'red' | 'green' | 'blue'

export const ThreeColorSquare = () => {
    const [squareColor, setSquareColor] = useState<SquareColor>('red')

    return (
        <>
            <ColorSquare color={squareColor}></ColorSquare>
            <Button onClick={() => setSquareColor('red')}>Red</Button>
            <Button onClick={() => setSquareColor('green')}>Green</Button>
            <Button onClick={() => setSquareColor('blue')}>Blue</Button>
        </>
    )
}

const ColorSquare = styled.div<{ color: SquareColor }>`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color};
`
