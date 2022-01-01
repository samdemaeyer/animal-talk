import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const worm = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 45) +
  `
                                            ${l}
                           .                 ${l}
                         .OO                  ${l}
                       .OOOO                   ${l}
                      .OOOO'                    ${l}
                      OOOO'          .-~~~~-.    ${l}
                      OOO'          /   (o)(o)   ${r}
              .OOOOOO \`O .OOOOOOO. /      .. |  ${r}
          .OOOOOOOOOOOO OOOOOOOOOO/\\    \\____/
        .OOOOOOOOOOOOOOOOOOOOOOOO/ \\\\   ,\\_/
       .OOOOOOO%%OOOOOOOOOOOOO(#/\\     /.
      .OOOOOO%%%OOOOOOOOOOOOOOO\\ \\\\  \\/OO.
     .OOOOO%%%%OOOOOOOOOOOOOOOOO\\   \\/OOOO.
     OOOOO%%%%OOOOOOOOOOOOOOOOOOO\\_\\/\\OOOOO
     OOOOO%%%OOOOOOOOOOOOOOOOOOOOO\\###)OOOO
     OOOOOO%%OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
     OOOOOOO%OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
     \`OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
   .-~~\\OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
  / _/  \`\\(#\\OOOOOOOOOOOOOOOOOOOOOOOOOOOO'
 / / \\  / \`~~\\OOOOOOOOOOOOOOOOOOOOOOOOOO'
|/'  \`\\//  \\\\ \\OOOOOOOOOOOOOOOOOOOOOOOO'
       \`-.__\\_,\\OOOOOOOOOOOOOOOOOOOOO'
           \`OO\\#)OOOOOOOOOOOOOOOOOOO'
             \`OOOOOOOOO''OOOOOOOOO'
               \`""""""'  \`""""""'
`
