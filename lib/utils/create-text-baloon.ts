export type TextBaloon = {
  firstRow: string
  middleRow: string
  lastRow: string
}

export const DEFAULT_TEXT = 'Welcome to animal talk, please pass add the `--text` param to be displayed here'
export const TEXT_PREFIX = '<   '
export const TEXT_SUFFIX = '   >'

export const createTextBaloon = (text?: string): TextBaloon => {
  return (text || DEFAULT_TEXT).split('').reduce(
    (prev, letter, currentIndex, array) => {
      return {
        firstRow: prev.firstRow + '-',
        middleRow:
          currentIndex === array.length - 1 ? prev.middleRow + `${letter}${TEXT_SUFFIX}` : prev.middleRow + letter,
        lastRow: prev.lastRow + '-',
      }
    },
    { firstRow: '--------', middleRow: TEXT_PREFIX, lastRow: '--------' }
  )
}
