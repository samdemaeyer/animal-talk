import type { TextBaloon } from '../utils'

export const lamb = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
                ${firstRow}
                ${middleRow}
                ${lastRow}
                     _,._   \\
                 __.'   _)   \\
                <_,)'.-"a\\   /
                  /' (    \\ /
      _.-----..,-'   (\`"--^
     //              |
    (|   \`;      ,   |
      \\   ;.----/  ,/
       ) // /   | |\\ \\
       \\ \\\\\`\\   | |/ /
        \\ \\\\ \\  | |\\/
         \`" \`"  \`"\`
`
}
