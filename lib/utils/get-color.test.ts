import { colorsMap, getColor } from './get-color'

describe('getColor', () => {
  it.each(Object.keys(colorsMap))('should return a color function for `%s`', color => {
    expect(typeof getColor(color)).toBe('function')
  })

  it('should return undefined if the color does not exist', () => {
    expect(getColor('nonExistingColor')).toBeUndefined()
  })
})
