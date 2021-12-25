import {
  rainbow,
  zebra,
  america,
  trap,
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
} from 'colors'

const colorsMap = {
  rainbow,
  zebra,
  america,
  trap,
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
}

export const getColor = color => {
  return colorsMap[color]
}
