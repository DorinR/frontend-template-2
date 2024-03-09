import { useState } from 'react'
import styled from 'styled-components'

export const DragAndDropExample = () => {
    const [nbInLeftBox, setNbInLeftBox] = useState(3)
    const [nbInRightBox, setNbInRightBox] = useState(2)

    return (
        <Container>
            <DropArea>
                {Array(nbInLeftBox).map((_) => (
                    <Box />
                ))}
            </DropArea>
            <DropArea>
                {Array(nbInRightBox).map((_) => (
                    <Box />
                ))}
            </DropArea>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`

const DropArea = styled.div`
    border: 1px dotted black;
    flex-grow: 1;
    height: 200px;

    display: flex;
    flex-wrap: wrap;
    gap: 3px;
`

const Box = styled.div`
    width: 10px;
    height: 10px;
    background-color: orangered;
`
