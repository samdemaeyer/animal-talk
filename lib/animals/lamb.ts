import { r, l } from '../utils/directions'
import type { AnimalArgs } from './types'

export const lamb = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(29, text) +
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
