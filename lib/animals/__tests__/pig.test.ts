import { createSpeechBubble } from '../../utils'
import { pig } from '../pig'
import { readOutput } from './helpers/read-output'

describe('pig()', () => {
  it('should return the `pig` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('pig')

    expect(pig({ createSpeechBubble, text })).toBe(output)
  })
})
