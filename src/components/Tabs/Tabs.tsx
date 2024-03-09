import React, { useState } from 'react'
import styled from 'styled-components'

export const Tabs = () => {
    const [currentlyDisplayedTab, setCurrentlyDisplayedTab] =
        useState<string>('tab1')

    const tabContents: Record<string, React.ReactNode> = {
        tab1: <FirstTab />,
        tab2: <SecondTab />,
        tab3: <ThirdTab />,
    }

    return (
        <>
            <h2>Tabs</h2>
            <TabsContainer>
                <TabHeader>
                    <TabHeaderButton
                        onClick={() => setCurrentlyDisplayedTab('tab1')}
                    >
                        Tab 1
                    </TabHeaderButton>
                    <TabHeaderButton
                        onClick={() => setCurrentlyDisplayedTab('tab2')}
                    >
                        Tab 2
                    </TabHeaderButton>
                    <TabHeaderButton
                        onClick={() => setCurrentlyDisplayedTab('tab3')}
                    >
                        Tab 3
                    </TabHeaderButton>
                </TabHeader>
                <TabContent>{tabContents[currentlyDisplayedTab]}</TabContent>
            </TabsContainer>
        </>
    )
}

const FirstTab = () => {
    return (
        <>
            <h2>first tab</h2>
            <p>first tab content</p>
        </>
    )
}
const SecondTab = () => {
    return (
        <>
            <h2>second tab</h2>
            <p>second tab content</p>
        </>
    )
}
const ThirdTab = () => {
    return (
        <>
            <h2>third tab</h2>
            <p>third tab content</p>
        </>
    )
}

const TabsContainer = styled.div`
    background-color: white;
`

const TabHeader = styled.div`
    display: flex;
    border: 1px solid black;
    border-bottom: none;
`

const TabHeaderButton = styled.div`
    padding: 8px;

    &:hover {
        background-color: grey;
    }
`

const TabContent = styled.div`
    padding: 8px;
    border: 1px solid black;
`
