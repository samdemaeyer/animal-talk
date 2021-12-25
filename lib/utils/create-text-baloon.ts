export type TextBaloon = {
  firstRow: string
  middleRow: string
  lastRow: string
}

export const createTextBaloon = (text: string): TextBaloon => {
  return (text || 'Welcome to pig says').split('').reduce(
    (prev, letter, currentIndex, array) => {
      return {
        firstRow: prev.firstRow + '-',
        middleRow: currentIndex === array.length - 1 ? prev.middleRow + `${letter}   >` : prev.middleRow + letter,
        lastRow: prev.lastRow + '-',
      }
    },
    { firstRow: '--------', middleRow: '<   ', lastRow: '--------' }
  )
}
