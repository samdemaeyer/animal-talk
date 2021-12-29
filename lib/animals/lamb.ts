import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const lamb = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 29) +
  `
                     _,._   ${l}
                 __.'   _)   ${l}
                <_,)'.-"a\\   ${r}
                  /' (    \\ ${r}
      _.-----..,-'   (\`"--^
     //              |
    (|   \`;      ,   |
      \\   ;.----/  ,/
       ) // /   | |\\ \\
       \\ \\\\\`\\   | |/ /
        \\ \\\\ \\  | |\\/
         \`" \`"  \`"\`
`
