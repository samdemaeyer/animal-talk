import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const horse = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 41) +
  `
                                        ${l}
                                         ${l}
                            _(\\_/)       ${r}
                          ,((((^\`\\      ${r}
                         ((((  (6 \\    ${r}
                       ,((((( ,    \\
   ,,,_              ,(((((  /"._  ,\`,
  ((((\\\\ ,...       ,((((   /    \`-.-'
  )))  ;'    \`"'"'""((((   (
 (((  /            (((      \\
  )) |                      |
 ((  |        .       '     |
 ))  \\     _ '      \`t   ,.')
 (   |   y;- -,-""'"-.\\   \\/
 )   / ./  ) /         \`\\  \\
    |./   ( (           / /'
    ||     \\\\          //'|
    ||      \\\\       _//'||
    ||       ))     |_/  ||
    \\_\\     |_/          ||
    \`'"                  \\_\\
                         \`'"
`
