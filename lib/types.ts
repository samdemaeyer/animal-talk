import type animals from './animals'
import type { CreateSpeechBubbleOutput, TextBaloonIndentationsLength, SpeechBubbleText } from './utils'

export type Animal = keyof typeof animals | 'random'

export type AnimalArgs = {
  createSpeechBubble: (
    text: SpeechBubbleText,
    indentationsLength: TextBaloonIndentationsLength
  ) => CreateSpeechBubbleOutput
  text: SpeechBubbleText
}
