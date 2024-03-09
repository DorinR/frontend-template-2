import { loremIpsum } from 'lorem-ipsum'
import { groupBy } from 'lodash'

export type BoardItems = {
    column: string
    title: string
    content: string
    tags: string[]
}

export const getMockKanbanData = (
    numberOfCols: number,
    numberOfCardsPerCol: number
): Record<number, BoardItems[]> => {
    const boardItems: BoardItems[] = []

    for (let col = 0; col < numberOfCols; col++) {
        for (let row = 0; row < numberOfCardsPerCol; row++) {
            boardItems.push({
                column: col.toString(),
                content: loremIpsum({
                    count: 1, // Number of "words", "sentences", or "paragraphs"
                    format: 'plain', // "plain" or "html"
                    random: Math.random, // A PRNG function
                    units: 'words', // par})
                }),
                title: loremIpsum({
                    count: 1, // Number of "words", "sentences", or "paragraphs"
                    format: 'plain', // "plain" or "html"
                    random: Math.random, // A PRNG function
                    units: 'words', // par})
                }),
                tags: ['a'],
            })
        }
    }

    return groupBy(boardItems, (bi) => bi.column)
}
