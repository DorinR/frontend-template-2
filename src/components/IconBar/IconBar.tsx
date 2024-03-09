import { Icon } from '@blueprintjs/core'
import styled from 'styled-components'

export const IconBar = () => {
    return (
        <>
            <h2>Icon Bar</h2>
            <IconButtonContainer>
                <IconButton>
                    <Icon icon="home" />
                </IconButton>
                <IconButton>
                    <Icon icon="calendar" />
                </IconButton>
                <IconButton>
                    <Icon icon="cloud-upload" />
                </IconButton>
                <IconButton>
                    <Icon icon="airplane" />
                </IconButton>
                <IconButton>
                    <Icon icon="antenna" />
                </IconButton>
            </IconButtonContainer>
        </>
    )
}

const IconButtonContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color: #b1bce6;
    border-radius: 8px;
`

const IconButton = styled.div`
    flex-grow: 1;
    padding: 15px;
    background-color: none;
    transition-property: background-color;
    transition-duration: 300ms;

    &:hover {
        background-color: #e6e6e6;
    }

    &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    display: flex;
    justify-content: center;
`
