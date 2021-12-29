import { white } from 'colors'
import { createSpeechBubble } from './create-speech-bubble'

describe('createSpeechBubble()', () => {
  it('should return the speech bubble with the correct text passed', () => {
    const text = 'some text'

    const [firstLine, secondLine, thirdLine] = createSpeechBubble(text).split('\n')

    expect(firstLine).toBe(white(' --------------- '))
    expect(secondLine).toBe(white(`<   ${text}   >`))
    expect(thirdLine).toBe(white(' --------------- '))
  })

  describe('when indentations are passed', () => {
    it('should return the speech bubble with the correct indentations when 10 indentations are passed', () => {
      const text = 'Some longer text'
      const speachBubble = createSpeechBubble(text, 10)
      const [firstLine, secondLine, thirdLine] = speachBubble.split('\n')

      expect(firstLine).toBe(white(' ---------------------- '))
      expect(secondLine).toBe(white(`<   ${text}   >`))
      expect(thirdLine).toBe(white(' ---------------------- '))
    })

    it('should return the speech bubble with the correct indentations when 50 indentations are passed', () => {
      const text = 'Some text'
      const speachBubble = createSpeechBubble(text, 50)
      const [firstLine, secondLine, thirdLine] = speachBubble.split('\n')

      expect(firstLine).toBe(white('                                         --------------- '))
      expect(secondLine).toBe(white(`                                        <   ${text}   >`))
      expect(thirdLine).toBe(white('                                         --------------- '))
    })
  })
})
