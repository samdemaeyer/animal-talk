import { createSpeechBubble } from '../../utils'
import { snail } from '../snail'
import { readOutput } from './helpers/read-output'

describe('snail()', () => {
  it('should return the `snail` with the correct speech bubble', () => {
    const text = 'some text'
    const output = readOutput('snail')

    expect(snail({ createSpeechBubble, text })).toBe(output)
  })
})
