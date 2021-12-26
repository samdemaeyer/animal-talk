import type { TextBaloon } from '../utils'

export const frog = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
                                    ${firstRow}
                                    ${middleRow}
                                    ${lastRow}
                              ..      /
                            .' @\`._  /
             ~       ...._.'  ,__.-;
          _..------/\`           .-'    ~
         :     __./'       ,  .'-'--.._
      ~   \`---(.-'''---.    \\\`._       \`.   ~
        _.--'(  .______.'.-' \`-.\`        \`.
       :      \`-..____\`-.                  ;
       \`.             \`\`\`\`                 ;   ~
         \`-.__                        __.-'
              \`\`\`\`-----.......-----'''    ~
           ~
`
}
