module.exports = function (text) {
  const textBaloon = (text || 'Welcome to pig says').split('').reduce((prev, letter, currentIndex, array) => {
    return {
      firstRow: prev.firstRow + '-',
      middleRow: (currentIndex === (array.length - 1)) ? prev.middleRow + `${letter}   >` : prev.middleRow + letter,
      lastRow: prev.lastRow + '-'
    }
  }, { firstRow: '------', middleRow: '<   ', lastRow: '------' })
  return textBaloon
}
