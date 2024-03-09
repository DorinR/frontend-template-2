import { useEffect, useState } from 'react'
import { loremIpsum } from 'lorem-ipsum'

export const useLoremIpsum = (numberOfWords: number) => {
    const [sentence, setSentence] = useState<string>()

    useEffect(() => {
        setSentence(
            loremIpsum({
                count: numberOfWords, // Number of "words", "sentences", or "paragraphs"
                format: 'plain', // "plain" or "html"
                random: Math.random, // A PRNG function
                units: 'words', // paragraph(s), "sentence(s)", or "word(s)"
            })
        )
    }, [numberOfWords])

    return {
        sentence,
    }
}
