import { n, r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const aardvark = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(7, text) +
  `
    ${r}
   ${r}           ,
  ${r}      (\`.  : \\               __..----..__
 ${n}        \`.\`.| |:          _,-':::''' '  \`:\`-._
 ${n}          \`.:\\||       _,':::::'         \`::::\`-.
 ${n}            \\\\\`|    _,':::::::'     \`:.     \`':::\`.
 ${n}             ;\` \`-''  \`::::::.                  \`::\\
  ${l}         ,-'      .::'  \`:::::.         \`::..    \`:\\
   ${l}      ,' /_) -.            \`::.           \`:.     |
    ${l}   ,'.:     \`    \`:.        \`:.     .::.          \\
   __,-'   ___,..-''-.  \`:.        \`.   /::::.         |
  |):'_,--'           \`.    \`::..       |::::::.      ::\\
   \`-'                 |\`--.:_::::|_____\\::::::::.__  ::|
                       |   _/|::::|      \\::::::|::/\\  :|
                       /:./  |:::/        \\__:::):/  \\  :\\
                     ,'::'  /:::|        ,'::::/_/    \`. \`\`-.__
                    ''''   (//|/\\      ,';':,-'         \`-.__  \`'--..__
                                                             \`''---::::'
`
