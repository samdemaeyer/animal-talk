import { white, gray } from 'colors'
import { argv } from './argv'

export const colorFn = argv.c ? gray : white
export const r = colorFn('/')
export const n = colorFn('|')
export const l = colorFn('\\')
