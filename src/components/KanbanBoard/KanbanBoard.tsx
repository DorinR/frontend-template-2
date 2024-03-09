import React, { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../Card/Card'
import { BoardItems, getMockKanbanData } from './MockData'

export const KanbanBoard = () => {
    const [boardState, setBoardState] = useState<Record<number, BoardItems[]>>(
        getMockKanbanData(3, 3)
    )

    const handleDragOver = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()

        // remove ondragenter class from other siblings
        const board = e.currentTarget.parentElement
        if (board) {
            let boardColumn = board.firstElementChild
            while (boardColumn) {
                if (
                    boardColumn !== e.currentTarget &&
                    boardColumn.classList.contains('ondragenter')
                ) {
                    boardColumn.classList.remove('ondragenter')
                }
                boardColumn = boardColumn.nextElementSibling
            }
        }

        if (!e.currentTarget.classList.contains('ondragenter')) {
            e.currentTarget.classList.add('ondragenter')
        }
    }

    const handleDrop = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove('ondragenter')
        const sectionHeader = e.currentTarget.firstElementChild
        if (sectionHeader && sectionHeader instanceof HTMLElement) {
            console.log(`Move card to ${sectionHeader.innerText}`)
        }
    }

    return (
        <Board>
            {Object.entries(boardState).map(([columnIndex, cards]) => {
                return (
                    <Column onDragOver={handleDragOver} onDrop={handleDrop}>
                        <ColumnHeader>
                            Section {Number(columnIndex) + 1}
                        </ColumnHeader>
                        <ColumnCardsContainer>
                            {cards.map((card) => {
                                return (
                                    <Card
                                        draggable
                                        title={card.title}
                                        content={card.content}
                                    />
                                )
                            })}
                        </ColumnCardsContainer>
                    </Column>
                )
            })}
        </Board>
    )
}

const Board = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 18px;
    overflow-x: scroll;
    padding: 0px 2px;
    margin-bottom: 20px;
`

const Column = styled.div`
    background-color: #cbe1cd;
    border-radius: 8px;
    padding: 10px;
`

const ColumnHeader = styled.div`
    font-size: 16px;
    padding: 8px;
    padding-left: 0px;
`

const ColumnCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
