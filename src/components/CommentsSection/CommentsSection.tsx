import styled from 'styled-components'
import { CommentCardFlexbox } from './CommentCard/CommentCard'
import { CommentsData } from './typings'

export const CommentsSection = ({ data }: { data: CommentsData }) => {
    return (
        <Comments>
            {data.comments.map((comment) => (
                <CommentCardFlexbox data={comment} />
            ))}
        </Comments>
    )
}

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
