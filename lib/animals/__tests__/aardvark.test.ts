import { createSpeechBubble } from '../../utils'
import { aardvark } from '../aardvark'
import { readOutput } from './helpers/read-output'

describe('aardvark()', () => {
  it('should return the `aardvark` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('aardvark')

    expect(aardvark({ createSpeechBubble, text })).toBe(output)
  })
})
