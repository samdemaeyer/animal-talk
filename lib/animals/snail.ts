import type { TextBaloon } from '../utils'

export const snail = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
                ${firstRow}
                ${middleRow}
                ${lastRow}
                       /
        /^\\    /^\\    /
       {  O}  {  O}  /
        \\ /    \\ /  /
        //     //  /    _------_
       //     //  /  ./~        ~-_
      / ~----~/  /  /              \\
    /         :   ./       _---_    ~-
   |  \\________) :       /~     ~\\   |
   |        /    |      |  :~~\\  |   |
   |       |     |      |  \\___-~    |
   |        \\ __/\`\\______\\.        ./
    \\                     ~-______-~\\.
    .|                                ~-_
   /_____________________________________~~____
`
}
