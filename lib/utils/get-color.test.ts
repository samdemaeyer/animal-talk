import { colorsMap, getColor } from './get-color'

describe('getColor', () => {
  it.each(Object.keys(colorsMap))('should return a color function for `%s`', color => {
    expect(typeof getColor(color as keyof typeof colorsMap)).toBe('function')
  })

  it('should return null if no color is passed', () => {
    expect(getColor()).toBeNull()
  })
})
