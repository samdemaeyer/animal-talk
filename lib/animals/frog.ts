import { r } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const frog = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 41) +
  `
                              ..      ${r}
                            .' @\`._  ${r}
             ~       ...._.'  ,__.-;
          _..------/\`           .-'    ~
         :     __./'       ,  .'-'--.._
      ~   \`---(.-'''---.    \\\`._       \`.   ~
        _.--'(  .______.'.-' \`-.\`        \`.
       :      \`-..____\`-.                  ;
       \`.             \`\`\`\`                 ;   ~
         \`-.__                        __.-'
              \`\`\`\`-----.......-----'''    ~
           ~
`
