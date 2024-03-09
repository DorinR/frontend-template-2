import { Icon } from '@blueprintjs/core'
import styled from 'styled-components'
import { ReplyInfo } from '../../typings'

export const ReplyCardFlexbox = ({ data }: { data: ReplyInfo }) => {
    return (
        <>
            <ReplyCard>
                <ReplyCardLeft>
                    <Votes score={data.score} />
                </ReplyCardLeft>
                <ReplyCardRight>
                    <TopBar>
                        <AuthorAndTimestampContainer>
                            <UserInfo username={data.user.username} />
                            <MessageTimestamp timestamp={data.createdAt} />
                        </AuthorAndTimestampContainer>
                        <CardActions>
                            <ReplyAction />
                        </CardActions>
                    </TopBar>
                    <CommentText comment={data.content} />
                </ReplyCardRight>
            </ReplyCard>
        </>
    )
}

const ReplyCard = styled.div`
    display: flex;
    gap: 25px;

    background-color: white;
    border-radius: 10px;
    padding: 25px;
`

const Votes = ({ score }: { score: number }) => {
    return (
        <VotesContainer>
            <VoteButton>+</VoteButton>
            <VoteButton>{score}</VoteButton>
            <VoteButton>-</VoteButton>
        </VotesContainer>
    )
}

const VotesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const VoteButton = styled.div`
    text-align: center;

    background-color: #ccf3ee;
    width: 45px;
    padding: 7px;

    &:first-child {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }

    &:last-child {
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }

    &:hover {
        background-color: #97c4b8;
    }
`

const ReplyCardLeft = styled.div``

const ReplyCardRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const CommentText = ({ comment }: { comment: string }) => {
    return <>{comment}</>
}

const AuthorAndTimestampContainer = styled.div`
    display: flex;
    gap: 15px;
`

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
`

const UserInfo = ({ username }: { username: string }) => {
    return (
        <UserInfoContainer>
            <UserAvatar
                src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png"
                alt="user"
            />
            <Username>{username}</Username>
        </UserInfoContainer>
    )
}

const UserInfoContainer = styled.div`
    display: flex;
    gap: 15px;
    align-content: center;
`

const UserAvatar = styled.img`
    border-radius: 50%;
    height: 20px;
    width: 20px;
`

const Username = styled.span`
    font-weight: bold;
`

const MessageTimestamp = ({ timestamp }: { timestamp: string }) => {
    return <span>{timestamp}</span>
}

const CardActions = styled.div`
    display: flex;
    gap: 15px;
`

const ReplyAction = () => {
    return (
        <ReplyActionContainer>
            <Icon icon="arrow-left" />
            <span>reply</span>
        </ReplyActionContainer>
    )
}

const ReplyActionContainer = styled.div`
    display: flex;
    align-content: center;
    gap: 5px;
`
