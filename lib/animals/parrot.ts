import { l, r } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const parrot = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 27) +
  `
                          ${l}
              __.------.   ${l}
           .-' .---.    \\   ${l}
         .'  .' O   )/"\\/    ${l}
       .'    )     >:'  L    ${r}
   .'"/      (    _J:   |   ${r}
  /  ''      \\   / \`\\   F  ${r}
 J  '         L_(   _> J  ${r}
 |  ( (         \`--' |/
J /  : :.      :  J
| |   :. :. :. : .:L
| \\   .     .  .:'|F
| |       \`:. .: ||
F ||         '  |||
| :)       : .  JJ
|) |            /F
 V A           /J
 || \\_.-.   .-.FF
---'--. /<--\\\\ L----.
      |||L   \\||     |
      JJ))   \`||     |
      )|___.---\\----'
.--'""<'|/ |F
    |J\`-'  FF
    | L : JJ
    | J  :||
    J | | ||
    J |_/\\_F
    J |  |J
     L L ||
     | | |F
     | | |F
`
