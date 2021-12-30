import { l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const bat = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 30) +
  `
                             ${l}
                              ${l}
               __           _  ${l}    _           __
        _..--"" ."""--._   ( \\.---./ )   _.--""". ""--.._
    .-'\`     ' .    \`'-.'.  \\/ e e \\/  .'.-'\`    . '     \`'-.
 .'\`       '            '.\\  \\  ^  /  /.'             '      \`'.
/__      '     .          \\\`\\/\`-"-\`\\/\`/          '      '     __\\
\`  '. .' __    .   _       \\{       }/       _   '    __ '. .'  \`
     '--'  '-. . /\` \\       {       }       / \`\\ ' .-'  '--'
              '-'    |       {     }       |    '-'
                      \\     //\\   /\\\\     /
                       '._ //  '-'  \\\\ _.'
                          (('.  )  .'))
                              \\(  /
                               \`"\`
`
