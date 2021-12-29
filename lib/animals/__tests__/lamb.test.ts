import { createSpeechBubble } from '../../utils'
import { lamb } from '../lamb'
import { readOutput } from './helpers/read-output'

describe('lamb()', () => {
  it('should return the `lamb` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('lamb')

    expect(lamb({ createSpeechBubble, text })).toBe(output)
  })
})
