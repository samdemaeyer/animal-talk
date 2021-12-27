#!/usr/bin/env node

import allAnimals from './animals'
import { createTextBaloon, getColor, argv, getAnimal } from './utils'

const { a: argsAnimal, t: text, c: color } = argv

const animal = getAnimal(argsAnimal)
const animalToRender = allAnimals[animal](createTextBaloon(text))
const colorFn = getColor(color)

console.log(colorFn?.(animalToRender) || animalToRender)
