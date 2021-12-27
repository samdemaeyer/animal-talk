import animals from '../animals'
import { getAnimal } from './get-animal'

describe('getAnimal()', () => {
  it.each(Object.keys(animals))('should return the correct animal for `%s`', animal => {
    expect(getAnimal(animal as keyof typeof animals)).toBe(animal)
  })

  it('should return a random animal when no animal is passed', () => {
    expect(Object.keys(animals).includes(getAnimal())).toBeTruthy()
  })

  it('should return a random animal when `random` is passed', () => {
    expect(Object.keys(animals).includes(getAnimal('random'))).toBeTruthy()
  })
})
