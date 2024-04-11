#!/usr/bin/env node

import allAnimals from './animals'
import { createSpeechBubble, getColor, argv, getAnimal } from './utils'
import { getRandomJoke } from './utils/random-joke'

const { a: argsAnimal, t: text = 'Please use the `-t` option to specify my text', c: color, j: joke = false } = argv

const animal = getAnimal(argsAnimal)
const animalToRender = allAnimals[animal]({ createSpeechBubble, text: joke ? getRandomJoke() : text })
const colorFn = getColor(color)

console.log(colorFn?.(animalToRender) || animalToRender)
