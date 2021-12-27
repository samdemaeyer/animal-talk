import type { CreateTextBaloonOutput, TextBaloonIndentationsLength, TextBaloonText } from '../utils'

export type AnimalArgs = {
  createTextBaloon: (indentationsLength: TextBaloonIndentationsLength, text: TextBaloonText) => CreateTextBaloonOutput
  text: TextBaloonText
}
