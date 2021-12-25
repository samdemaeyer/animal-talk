import { createTextBaloon, DEFAULT_TEXT, TEXT_PREFIX, TEXT_SUFFIX } from './create-text-baloon'
import { generateFirstAndLastRow } from './generate-first-and-last-row'

describe('createTextBaloon', () => {
  it('should create the text baloon with the correct text passed', () => {
    const text = 'some text'
    const firstAndLastRow = generateFirstAndLastRow(text)

    expect(createTextBaloon(text)).toStrictEqual({
      firstRow: firstAndLastRow,
      middleRow: `${TEXT_PREFIX}${text}${TEXT_SUFFIX}`,
      lastRow: firstAndLastRow,
    })
  })

  it('should create the text baloon with default text when no text is passed', () => {
    const firstAndLastRow = generateFirstAndLastRow(DEFAULT_TEXT)

    expect(createTextBaloon()).toStrictEqual({
      firstRow: firstAndLastRow,
      middleRow: `${TEXT_PREFIX}${DEFAULT_TEXT}${TEXT_SUFFIX}`,
      lastRow: firstAndLastRow,
    })
  })
})
