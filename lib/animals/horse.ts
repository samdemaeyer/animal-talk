import type { TextBaloon } from '../utils'

export const horse = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
                              ${firstRow}
                              ${middleRow}
                              ${lastRow}
                                        \\
                                         \\
                            _(\\_/)       /
                          ,((((^\`\\      /
                         ((((  (6 \\    /
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
}
