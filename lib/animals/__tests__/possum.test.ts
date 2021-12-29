import { createSpeechBubble } from '../../utils'
import { possum } from '../possum'
import { readOutput } from './helpers/read-output'

describe('possum()', () => {
  it('should return the `possum` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('possum')

    expect(possum({ createSpeechBubble, text })).toBe(output)
  })
})
