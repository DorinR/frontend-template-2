import { Button } from '@blueprintjs/core'
import { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DropdownNavbarButton = ({
    children,
    label,
}: {
    children: React.ReactNode
    label: string
}) => {
    const [isVisible, setIsVisible] = useState(false)

    const mouseEnterHandler = () => {
        setIsVisible(true)
    }

    const mouseLeaveHandler = () => {
        setIsVisible(false)
    }

    return (
        <NavbarDropdownContainer
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <Button minimal large rightIcon="caret-down">
                {label}
            </Button>
            <OptionsContainer
                isVisible={isVisible}
                onClick={() => {
                    setIsVisible(false)
                }}
            >
                {children}
            </OptionsContainer>
        </NavbarDropdownContainer>
    )
}

export const NavbarDropdownOption = ({
    to,
    label,
    icon,
}: {
    to: string
    label: string
    icon?: BlueprintIcons_16Id
}) => {
    return (
        <Link to={to}>
            <NavbarDropdownButton icon={icon} minimal large>
                {label}
            </NavbarDropdownButton>
        </Link>
    )
}

const NavbarDropdownContainer = styled.div`
    display: inline-block;
`

const NavbarDropdownButton = styled(Button)`
    display: block;
    width: 100%;
`

const OptionsContainer = styled.div<{ isVisible: boolean }>`
    position: absolute;
    background-color: white;
    border: 1px solid #d8dee4;
    border-radius: 6%;
    box-shadow: 0px 0px 15px #e9ecef;
    min-width: 200px;
    transition-duration: 300ms;
    transition-property: visibility, opacity;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`
