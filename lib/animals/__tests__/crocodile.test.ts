import { createSpeechBubble } from '../../utils'
import { crocodile } from '../crocodile'
import { readOutput } from './helpers/read-output'

describe('crocodile()', () => {
  it('should return the `crocodile` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('crocodile')

    expect(crocodile({ createSpeechBubble, text })).toBe(output)
  })
})
