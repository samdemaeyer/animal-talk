import type animals from './animals'

export type Animals = keyof typeof animals | 'random'
