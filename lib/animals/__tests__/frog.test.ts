import { createSpeechBubble } from '../../utils'
import { frog } from '../frog'
import { readOutput } from './helpers/read-output'

describe('frog()', () => {
  it('should return the `frog` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('frog')

    expect(frog({ createSpeechBubble, text })).toBe(output)
  })
})
