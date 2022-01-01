import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const lion = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 39) +
  `
                                      ${l}
                          ,%%%%%%%,    ${l}
                        ,%%/\\%%%%/\\%,   ${l}
                       ,%%%\\c "" J/%%,   ${l}
  %.                   %%%%/ d  b \\%%%   ${r}
  \`%%.         __      %%%%    _  |%%%  ${r}
   \`%%      .-'  \`"~--"\`%%%%(=_Y_=)%%'
    //    .'     \`.     \`%%%%\`\\7/%%%'____
   ((    /         ;      \`%%%%%%%'____)))
   \`.\`--'         ,'   _,\`-._____\`-,
     \`"""\`._____  \`--,\`          \`)))
                \`~"-)))
`
