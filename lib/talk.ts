#!/usr/bin/env node

import allAnimals from './animals'
import { createSpeechBubble, getColor, argv, getAnimal } from './utils'

const { a: argsAnimal, t: text, c: color } = argv

const animal = getAnimal(argsAnimal)
const animalToRender = allAnimals[animal]({ createSpeechBubble, text })
const colorFn = getColor(color)

console.log(colorFn?.(animalToRender) || animalToRender)
