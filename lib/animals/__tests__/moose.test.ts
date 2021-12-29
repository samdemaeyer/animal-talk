import { createSpeechBubble } from '../../utils'
import { moose } from '../moose'
import { readOutput } from './helpers/read-output'

describe('moose()', () => {
  it('should return the `moose` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('moose')

    expect(moose({ createSpeechBubble, text })).toBe(output)
  })
})
