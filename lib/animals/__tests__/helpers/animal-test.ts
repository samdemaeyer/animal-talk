import type { Animal, AnimalArgs } from '../../../types'
import { createSpeechBubble } from '../../../utils'
import { readOutput } from './read-output'

export const animalTest = (animalFn: (args: AnimalArgs) => string) => {
  const fnName = animalFn.name as Animal

  describe(`${fnName}()`, () => {
    it(`should return the \`${fnName}\` with the correct speech bubble`, () => {
      expect(animalFn({ createSpeechBubble, text: 'Some text' })).toBe(readOutput(fnName))
    })

    it(`should return the \`${fnName}\` with the correct speech bubble when there is a looooooong text`, () => {
      expect(animalFn({ createSpeechBubble, text: 'Some longer text to be put in the speech bubble' })).toBe(
        readOutput(`${fnName}-long-text`)
      )
    })
  })
}
