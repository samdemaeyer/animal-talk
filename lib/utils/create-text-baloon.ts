import { white } from 'colors'
import { colorFn } from './directions'

export type TextBaloonText = string
export type TextBaloonIndentationsLength = number
export type CreateTextBaloonOutput = string

export const DEFAULT_TEXT = 'Welcome to animal talk, please pass add the `--text` param to be displayed here'
export const TEXT_PREFIX = colorFn('<   ')
export const TEXT_SUFFIX = colorFn('   >')

export const createTextBaloon = (indentationsLength = 0, text?: TextBaloonText): CreateTextBaloonOutput => {
  const { firstRow, middleRow, lastRow } = (text || DEFAULT_TEXT).split('').reduce(
    ({ firstRow, middleRow, lastRow }, letter, currentIndex, array) => {
      return {
        firstRow: firstRow + '-',
        middleRow: currentIndex === array.length - 1 ? middleRow + `${letter}${TEXT_SUFFIX}` : middleRow + letter,
        lastRow: lastRow + '-',
      }
    },
    { firstRow: '--------', middleRow: TEXT_PREFIX, lastRow: '--------' }
  )

  const indentations = Array.from({ length: indentationsLength - Math.round(middleRow.length / 2) }).join(' ')
  return white(`${indentations}${colorFn(firstRow)}\n${indentations}${middleRow}\n${indentations}${colorFn(lastRow)}`)
}
