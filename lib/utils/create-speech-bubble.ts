import { reset } from 'colors'

export type SpeechBubbleText = string
export type TextBaloonIndentationsLength = number
export type CreateSpeechBubbleOutput = string

export const DEFAULT_TEXT = 'Welcome to animal talk, please pass add the `--text` param to be displayed here'
export const TEXT_PREFIX = reset('<   ')
export const TEXT_SUFFIX = reset('   >')
export const FIRST_ROW_PREFIX = ' -------'
export const FIRST_ROW_SUFFIX = '------- '

export const createSpeechBubble = (indentationsLength = 0, text: SpeechBubbleText): CreateSpeechBubbleOutput => {
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
  return reset(`${indentations}${firstRow}\n${indentations}${middleRow}\n${indentations}${lastRow}`)
}
