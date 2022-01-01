import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const deer = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 10) +
  `
       ${r}
      ${r}
     ${r}     /|       |\\
    ${r}   \`__\\\\       //__'
    ${l}     ||      ||
     ${l}  \\__\`\\     |'__/
      ${l}   \`_\\\\   //_'
       ${l}  _.,:---;,._
        ${l} \\_:     :_/
         ${l}   |@. .@|
          ${l}  |     |
             ,\\.-./ \\
             ;;\`-'   \`---__________-----.-.
             ;;;                         \\_\\
             ';;;                         |
              ;    |                      ;
               \\   \\     \\        |      /
                \\_, \\    /        \\     |\\
                  |';|  |,,,,,,,,/ \\    \\ \\_
                  |  |  |           \\   /   |
                  \\  \\  |           |  / \\  |
                   | || |           | |   | |
                   | || |           | |   | |
                   | || |           | |   | |
                   |_||_|           |_|   |_|
                  /_//_/           /_/   /_/
`
