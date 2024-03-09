import { Icon } from '@blueprintjs/core'
import React, { useState } from 'react'
import styled from 'styled-components'

export const Accordion = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h2>Accordion</h2>
            <div>{children}</div>
        </>
    )
}

export const Section = ({
    sectionHeadingLabel,
    sectionContent,
}: {
    sectionHeadingLabel: string
    sectionContent: string
}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggleIsExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <SectionContainer>
            <SectionHeader onClick={handleToggleIsExpanded}>
                <span>{sectionHeadingLabel}</span>
                <span>
                    <Icon icon="add" />
                </span>
            </SectionHeader>
            <SectionContent isExpanded={isExpanded}>
                {sectionContent}
            </SectionContent>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    background-color: #e6e6e6;

    &:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const SectionContent = styled.div<{ isExpanded: boolean }>`
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: ${(props) => (props.isExpanded ? '10px' : '0px')};
    padding-bottom: ${(props) => (props.isExpanded ? '10px' : '0px')};
    overflow: hidden;
    transition: max-height 400ms cubic-bezier(0.65, 0, 0.35, 1),
        padding-top 400ms cubic-bezier(0.65, 0, 0.35, 1),
        padding-bottom 400ms cubic-bezier(0.65, 0, 0.35, 1);
    max-height: ${(props) => (props.isExpanded ? '200px' : '0px')};
`
