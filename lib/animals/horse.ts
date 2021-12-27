import { r, l } from '../utils/directions'
import type { AnimalArgs } from './types'

export const horse = ({ createTextBaloon, text }: AnimalArgs) =>
  createTextBaloon(41, text) +
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
