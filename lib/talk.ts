#!/usr/bin/env node

import allAnimals from './animals'
import type { Args } from './types'
import { createTextBaloon, getColor } from './utils'

const [_, __, ...restArgs] = process.argv
const args: Args = { animal: null, text: null, color: null }

for (let i = 0; i < restArgs.length; i++) {
  const el = restArgs[i]
  if (el.substring(0, 2) === '--') {
    args[el.replace('--', '')] = restArgs[i + 1]
  }
}

const { animal: argsAnimal, text, color } = args

const animals = Object.keys(allAnimals)
const animal = argsAnimal || animals[Math.floor(Math.random() * animals.length)]
const animalToRender = allAnimals[animal](createTextBaloon(text))
const colorFn = getColor(color)

console.log(colorFn?.(animalToRender) || animalToRender)
