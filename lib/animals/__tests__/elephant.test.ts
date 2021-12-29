import { createSpeechBubble } from '../../utils'
import { elephant } from '../elephant'
import { readOutput } from './helpers/read-output'

describe('elephant()', () => {
  it('should return the `elephant` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('elephant')

    expect(elephant({ createSpeechBubble, text })).toBe(output)
  })
})
