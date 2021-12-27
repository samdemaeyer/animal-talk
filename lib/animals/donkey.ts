import type { TextBaloon } from '../utils'

export const donkey = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
                                ${firstRow}
                                ${middleRow}
                                ${lastRow}
                                          \\
                          /\\          /\\   \\
                         ( \\\\        // )   \\
                          \\ \\\\      // /     \\
                           \\_\\\\||||//_/      /
                            \\/ _  _ \\       /
                           \\/|(O)(O)|      /
                          \\/ |      |     /
      ___________________\\/  \\      /    /
     //                //     |____|    /
    //                ||     /      \\  /
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
}