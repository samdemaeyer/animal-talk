import type { CreateSpeechBubbleOutput, TextBaloonIndentationsLength, SpeechBubbleText } from '../utils'

export type AnimalArgs = {
  createSpeechBubble: (
    indentationsLength: TextBaloonIndentationsLength,
    text: SpeechBubbleText
  ) => CreateSpeechBubbleOutput
  text: SpeechBubbleText
}
