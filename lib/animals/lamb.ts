import { r, l } from '../utils/directions'
import type { AnimalArgs } from './types'

export const lamb = ({ createTextBaloon, text }: AnimalArgs) =>
  createTextBaloon(29, text) +
  `
                     _,._   ${l}
                 __.'   _)   ${l}
                <_,)'.-"a\\   ${r}
                  /' (    \\ ${r}
      _.-----..,-'   (\`"--^
     //              |
    (|   \`;      ,   |
      \\   ;.----/  ,/
       ) // /   | |\\ \\
       \\ \\\\\`\\   | |/ /
        \\ \\\\ \\  | |\\/
         \`" \`"  \`"\`
`
