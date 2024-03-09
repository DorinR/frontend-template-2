import { Tag } from '@blueprintjs/core'
import styled from 'styled-components'
import { useLoremIpsum } from '../../Hooks/randomGenerators/useLoremIpsum'
import { useGetRandomColor } from '../../Hooks/randomGenerators/useGetRandomColor'

export const Card = ({
    title,
    content,
    draggable,
}: {
    title?: string
    content?: string
    draggable?: boolean
}) => {
    const { sentence: fallbackTitle } = useLoremIpsum(4)
    const { sentence: fallbackContent } = useLoremIpsum(12)
    const { sentence: tag1 } = useLoremIpsum(1)
    const { sentence: tag2 } = useLoremIpsum(1)
    const { color: color1 } = useGetRandomColor('green')
    const { color: color2 } = useGetRandomColor('orange')

    return (
        <>
            <CardContainer draggable={draggable}>
                <CardTitle>{title ?? fallbackTitle}</CardTitle>
                <CardContent>{content ?? fallbackContent}</CardContent>
                <CardFooter>
                    <StyledTag color={color1}>{tag1}</StyledTag>
                    <StyledTag color={color2}>{tag2}</StyledTag>
                </CardFooter>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    padding: 12px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    background-color: white;

    width: 250px;
`

const CardTitle = styled.div`
    font-weight: bolder;
    font-size: 18px;
    padding-bottom: 5px;
`

const CardContent = styled.p`
    margin-bottom: 10px;
`

const CardFooter = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 5px;
`

const StyledTag = styled(Tag)<{ color: string }>`
    background-color: ${(props) => props.color};
    color: black;
`
