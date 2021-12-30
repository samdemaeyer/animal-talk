import { r, l, n } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const cat = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 38) +
  `
                                     ${l}
        _..---...,""-._     ,/}/)     ${l}
     .''        ,      \`\`..'(/-<       ${n}
    /   _      {      )         \\     ${r}
   ;   _ \`.     \`.   <         a(   ${r}
 ,'   ( \\  )      \`.  \\ __.._ .: y
(  <\\_-) )'-.____...\\  \`._   //-'
 \`. \`-' /-._)))      \`-._)))
   \`...'
`
