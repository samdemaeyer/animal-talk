import { TEXT_PREFIX, TEXT_SUFFIX } from './create-text-baloon'
import { generateFirstAndLastRow } from './generate-first-and-last-row'

describe('generateFirstAndLastRow', () => {
  it('should generate the correct first and last rows with the correct character length', () => {
    const text = 'some text'

    expect(generateFirstAndLastRow(text).length).toBe(text.length + TEXT_PREFIX.length + TEXT_SUFFIX.length)
  })

  it('should generate the correct first and last rows with the correct characters', () => {
    const text = 'some text'

    expect(
      generateFirstAndLastRow(text)
        .split('')
        .every(el => el === '-')
    ).toBeTruthy()
  })
})
