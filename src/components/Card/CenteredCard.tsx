import { Card, Elevation } from '@blueprintjs/core'
import React from 'react'
import styled from 'styled-components'

export const CenteredCard = ({
    children,
    title,
}: {
    children: React.ReactNode
    title: string
}) => {
    return (
        <LoginLandingPageContainer>
            <StyledH1>{title}</StyledH1>
            <Card elevation={Elevation.TWO}>
                <UserTypesButtonsContainer>
                    {children}
                </UserTypesButtonsContainer>
            </Card>
        </LoginLandingPageContainer>
    )
}

const LoginLandingPageContainer = styled.div`
    max-width: 450px;
    margin: auto;
    margin-top: 300px;
    margin-bottom: 300px;
`

const UserTypesButtonsContainer = styled.div`
    max-width: 375px;
    margin: auto;
    padding: 30px;
`

const StyledH1 = styled.h1`
    margin-bottom: 5px;
    font-family: 'Work Sans', sans-serif;
`
