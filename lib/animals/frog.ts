import { r } from '../utils/directions'
import type { AnimalArgs } from './types'

export const frog = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(41, text) +
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
