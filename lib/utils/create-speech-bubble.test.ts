import { createSpeechBubble, TEXT_PREFIX, TEXT_SUFFIX } from './create-speech-bubble'

describe('createSpeechBubble()', () => {
  it('should create the text baloon with the correct text passed', () => {
    const text = 'some text'

    const speachBubble = createSpeechBubble(10, text)

    expect(speachBubble).toContain(`${TEXT_PREFIX}${text}${TEXT_SUFFIX}`)
    expect(speachBubble).toContain(` ---------------`)
    expect(speachBubble).toContain(`--------------- `)
  })
})
