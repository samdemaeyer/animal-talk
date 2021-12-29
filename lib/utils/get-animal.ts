import animals from '../animals'
import type { Animal } from '../types'

// @TODO: unify Animal type to be used from argv options
export const getAnimal = (animal?: Animal): keyof typeof animals => {
  const animalkeys = Object.keys(animals) as Array<keyof typeof animals>
  const isRandom = !animal || animal === 'random'
  return isRandom ? animalkeys[Math.floor(Math.random() * animalkeys.length)] : animal
}
