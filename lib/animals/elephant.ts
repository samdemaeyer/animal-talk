import { r, l, n } from '../utils/directions'
import type { AnimalArgs } from './types'

export const elephant = ({ createTextBaloon, text }: AnimalArgs) =>
  createTextBaloon(11, text) +
  `
        ${r}
       ${r}
      ${r}       ___.-~"~-._   __....__
     ${r}      .'    \`    \\ ~"~        \`\`-.
    ${n}      /\` _      )  \`\\              \`\\
     ${l}    /\`  a)    /     |               \`\\
         :\`        /      |                 \\
    <\`-._|\`  .-.  (      /   .            \`;\\\\
     \`-. \`--'_.'-.;\\___/'   .      .       | \\\\
  _     /:--\`     |        /     /        .'  \\\\
 ("\\   /\`/        |       '     '         /    :\`;
 \`\\'\\_/\`/         .\\     /\`~\`=-.:        /     \`\`
   \`._.'          /\`\\    |      \`\\      /(
                 /  /\\   |        \`\\   /  \\
                /  /  Y  |         |  /\`\\  \\
               /  |   |  |         |  |  |  |
              "---"  /___|        /___|  /__|
                     '"""         '"""  '"""
`
