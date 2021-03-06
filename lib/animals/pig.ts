import { l, r } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const pig = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 45) +
  `
                         /\\                 ${l}
                        /  \`.                ${l}
                      ,'     \`.               ${l}
       /\`.________   (         :               ${l}
       \\          \`. _\\_______  )              ${r}
        \\ \`.----._  \`.        "\`-.            ${r}
         )  \\     \\   \`       ,"__\\          ${r}
         \\   \\     )    ,--    (/o\\\\        ${r}
     (  _ \`.  \`---'     ,--.    \\ _)).     ${r}
      \`(-',-\`----'     ( (O \\    \`--,"\`-.
        \`/              \\ \\__)    ,'   O )
        /                \`--'     (  O  ,'
       (                           \`--,'
        \\                    \`==  _.-'
         \\              .____.-;-'
          ) \`._               /
         (    |\`-._\\    | ,' /
          \`.__|__/ "\\   |'  /
                     \`._|_,'
`
