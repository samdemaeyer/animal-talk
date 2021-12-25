import type { TextBaloon } from '../utils'

export const aardvark = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
  ${firstRow}
  ${middleRow}
  ${lastRow}
    /
   /           ,
  /      (\`.  : \\               __..----..__
 |        \`.\`.| |:          _,-':::''' '  \`:\`-._
 |          \`.:\\||       _,':::::'         \`::::\`-.
 |            \\\\\`|    _,':::::::'     \`:.     \`':::\`.
 |             ;\` \`-''  \`::::::.                  \`::\\
  \\         ,-'      .::'  \`:::::.         \`::..    \`:\\
   \\      ,' /_) -.            \`::.           \`:.     |
    \\   ,'.:     \`    \`:.        \`:.     .::.          \\
   __,-'   ___,..-''-.  \`:.        \`.   /::::.         |
  |):'_,--'           \`.    \`::..       |::::::.      ::\\
   \`-'                 |\`--.:_::::|_____\\::::::::.__  ::|
                       |   _/|::::|      \\::::::|::/\\  :|
                       /:./  |:::/        \\__:::):/  \\  :\\
                     ,'::'  /:::|        ,'::::/_/    \`. \`\`-.__
                    ''''   (//|/\\      ,';':,-'         \`-.__  \`'--..__
                                                             \`''---::::'
`
}
