import { createSpeechBubble } from '../../utils'
import { donkey } from '../donkey'
import { readOutput } from './helpers/read-output'

describe('donkey()', () => {
  it('should return the `donkey` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('donkey')

    expect(donkey({ createSpeechBubble, text })).toBe(output)
  })
})
