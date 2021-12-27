import { r } from '../utils/directions'
import type { AnimalArgs } from './types'

export const snail = ({ createTextBaloon, text }: AnimalArgs) =>
  createTextBaloon(26, text) +
  `
                       ${r}
        /^\\    /^\\    ${r}
       {  O}  {  O}  ${r}
        \\ /    \\ /  ${r}
        //     //  ${r}    _------_
       //     //  ${r}  ./~        ~-_
      / ~----~/  ${r}  /              \\
    /         :   ./       _---_    ~-
   |  \\________) :       /~     ~\\   |
   |        /    |      |  :~~\\  |   |
   |       |     |      |  \\___-~    |
   |        \\ __/\`\\______\\.        ./
    \\                     ~-______-~\\.
    .|                                ~-_
   /_____________________________________~~____
`
