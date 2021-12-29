import { createSpeechBubble } from '../../utils'
import { horse } from '../horse'
import { readOutput } from './helpers/read-output'

describe('horse()', () => {
  it('should return the `horse` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('horse')

    expect(horse({ createSpeechBubble, text })).toBe(output)
  })
})
