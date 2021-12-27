import { r, l } from '../utils/directions'
import type { AnimalArgs } from './types'

export const donkey = ({ createTextBaloon, text }: AnimalArgs) =>
  createTextBaloon(43, text) +
  `
                                          ${l}
                          /\\          /\\   ${l}
                         ( \\\\        // )   ${l}
                          \\ \\\\      // /     ${l}
                           \\_\\\\||||//_/      ${r}
                            \\/ _  _ \\       ${r}
                           \\/|(O)(O)|      ${r}
                          \\/ |      |     ${r}
      ___________________\\/  \\      /    ${r}
     //                //     |____|    ${r}
    //                ||     /      \\  ${r}
   //|                \\|     \\ 0  0 /
  // \\       )         V    / \\____/
 //   \\     /        (     /
""     \\   /_________|  |_/
       /  /\\   /     |  ||
      /  / /  /      \\  ||
      | |  | |        | ||
      | |  | |        | ||
      |_|  |_|        |_||
       \\_\\  \\_\\        \\_\\\\
`
