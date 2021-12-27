import { rainbow, america, random, black, red, green, yellow, blue, magenta, cyan, white, gray, grey } from 'colors'

export const colorsMap = {
  rainbow,
  america,
  random,
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  gray,
  grey,
} as const

// @TODO: unify Color type to be used from argv options
export const getColor = (color?: keyof typeof colorsMap) => {
  if (!color) {
    return null
  }

  return colorsMap[color]
}
