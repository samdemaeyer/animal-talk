import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const prayingMonkey = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 33) +
  `
                                ${l}
                  __------__     ${l}
                /~          ~\\    ${l}
               |    //^\\\\//^\\|     ${l}
             /~~\\  ||  o| |o|:~\\   ${r}
            | |6   ||___|_|_||:|  ${r}
             \\__.  /      o  \\/'
              |   (       O   )
     /~~~~\\    \`\\  \\         /
    | |~~\\ |     )  ~------~\`\\
   /' |  | |   /     ____ /~~~)\\
  (_/'   | | |     /'    |    ( |
         | | |     \\    /   __)/ \\
         \\  \\ \\      \\/    /' \\   \`\\
           \\  \\|\\        /   | |\\___|
             \\ |  \\____/     | |
             /^~>  \\        _/ <
            |  |         \\       \\
            |  | \\        \\        \\
            -^-\\  \\       |        )
                 \`\\_______/^\\______/
`
