import styled from 'styled-components'
import { ReplyInfo } from '../../typings'
import { ReplyCardFlexbox } from './ReplyCard'

export const Replies = ({ replies }: { replies: ReplyInfo[] }) => {
    return (
        <ReplyContainerOuter>
            <VerticalLine></VerticalLine>
            <RepliesContainer>
                {replies.map((reply) => (
                    <ReplyCardFlexbox data={reply} />
                ))}
            </RepliesContainer>
        </ReplyContainerOuter>
    )
}

const ReplyContainerOuter = styled.div`
    display: flex;
    margin-top: 15px;
`

const VerticalLine = styled.div`
    width: 4px;
    background-color: #79b4b7;
    margin: 0px 50px;
`

const RepliesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
