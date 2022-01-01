import { black, blue, cyan, gray, green, grey, magenta, random, red, white, yellow } from 'colors'

export const colorsMap = {
  black,
  blue,
  cyan,
  gray,
  green,
  grey,
  magenta,
  random,
  red,
  white,
  yellow,
} as const

// @TODO: unify Color type to be used from argv options
export const getColor = (color?: keyof typeof colorsMap) => {
  if (!color) {
    return null
  }

  return colorsMap[color]
}
