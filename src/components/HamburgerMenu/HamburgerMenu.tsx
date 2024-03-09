import { Button } from '@blueprintjs/core'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export const HamburgerMenu = ({ children }: { children: React.ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleOptionsVisibility = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <HamburgerMenuContainer>
            <Button
                onClick={toggleOptionsVisibility}
                icon="menu"
                large
            ></Button>
            <OptionsContainer isVisible={isExpanded}>
                {children}
            </OptionsContainer>
        </HamburgerMenuContainer>
    )
}

const HamburgerMenuContainer = styled.div`
    margin-right: 15px;
`

const OptionsContainer = styled.div<{ isVisible: boolean }>`
    width: 100px;
    position: absolute;
    z-index: 1;
    background-color: white;
    border: 1px solid black;
    ${(props) => {
        if (!props.isVisible) {
            return css`
                display: none;
            `
        }
    }}
`
