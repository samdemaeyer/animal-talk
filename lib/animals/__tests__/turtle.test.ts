import { createSpeechBubble } from '../../utils'
import { turtle } from '../turtle'
import { readOutput } from './helpers/read-output'

describe('turtle()', () => {
  it('should return the `turtle` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('turtle')

    expect(turtle({ createSpeechBubble, text })).toBe(output)
  })
})
