import { white } from 'colors'

export type SpeechBubbleText = string
export type TextBaloonIndentationsLength = number
export type CreateSpeechBubbleOutput = string

const TEXT_PREFIX = '<   '
const TEXT_SUFFIX = '   >'

export const createSpeechBubble = (text: SpeechBubbleText, indentationsLength = 0): CreateSpeechBubbleOutput => {
  const { firstRow, middleRow, lastRow } = text.split('').reduce(
    ({ firstRow, middleRow, lastRow }, letter, currentIndex, array) => {
      const isLast = currentIndex === array.length - 1

      return {
        firstRow: firstRow + (isLast ? ' ' : '-'),
        middleRow: isLast ? middleRow + `${letter}${TEXT_SUFFIX}` : middleRow + letter,
        lastRow: lastRow + (isLast ? ' ' : '-'),
      }
    },
    { firstRow: ' -------', middleRow: TEXT_PREFIX, lastRow: ' -------' }
  )

  const indentations = Array.from({ length: indentationsLength - Math.round(middleRow.length / 2) }).join(' ')

  return white(`${indentations}${firstRow}\n${indentations}${middleRow}\n${indentations}${lastRow}`)
}
