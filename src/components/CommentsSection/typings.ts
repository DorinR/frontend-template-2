export type CommentsData = {
    currentUser: UserInfo
    comments: {
        id: number
        content: string
        createdAt: string
        score: number
        user: UserInfo
        replies: ReplyInfo[]
    }[]
}

type UserInfo = {
    image: {
        png: string
        webp: string
    }
    username: string
}

export type ReplyInfo = {
    id: number
    content: string
    createdAt: string
    score: number
    user: UserInfo
}

export type CommentInfo = ReplyInfo & {
    replies: ReplyInfo[]
}
