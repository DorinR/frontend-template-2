import { Button, Icon } from '@blueprintjs/core'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FullScreenOverlay = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <h2>Full Screen Overlay</h2>
            <Button onClick={() => setIsExpanded(true)}>Slide Right</Button>
            <Overlay isExpanded={isExpanded}>
                {isExpanded && (
                    <>
                        <MenuContainer>
                            <Link to="/">
                                <MenuItem onClick={() => setIsExpanded(false)}>
                                    Home
                                </MenuItem>
                            </Link>
                            <Link to="/appointments">
                                <MenuItem onClick={() => setIsExpanded(false)}>
                                    Appointment
                                </MenuItem>
                            </Link>
                        </MenuContainer>
                        <StyledIcon
                            icon="cross"
                            size={25}
                            onClick={() => setIsExpanded(false)}
                        />
                    </>
                )}
            </Overlay>
        </>
    )
}

const MenuContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
`

const MenuItem = styled.div`
    padding: 20px;
    text-align: center;
    font-size: 20px;
    color: grey;

    transition: color 300ms, background-color 300ms, opacity 300ms;
    &:hover {
        color: black;
        background-color: aliceblue;
        opacity: 0.3;
    }
`

const StyledIcon = styled(Icon)`
    position: absolute;
    top: 20px;
    right: 20px;

    color: grey;
    padding: 10px;

    &:hover {
        color: white;
    }
`

const Overlay = styled.div<{ isExpanded: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${(props) => (props.isExpanded ? '100vw' : '0px')};
    transition: width 500ms;
    opacity: 0.5;
    z-index: 2;
    background-color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
`
