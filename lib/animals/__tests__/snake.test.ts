import { createSpeechBubble } from '../../utils'
import { snake } from '../snake'
import { readOutput } from './helpers/read-output'

describe('snake()', () => {
  it('should return the `snake` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('snake')

    expect(snake({ createSpeechBubble, text })).toBe(output)
  })
})
