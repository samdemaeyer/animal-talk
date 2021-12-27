import { r, l } from '../utils/directions'
import type { AnimalArgs } from './types'

export const crocodile = ({ createSpeechBubble, text }: AnimalArgs) =>
  `
                       .--.  .--.
                      /    \\/    \\
                     /   .-.  .-. |
                    /   |  _\\|  _\\|
              .----'    |/\` ||/\` ||
            _/    ,--    \\_0/ \\_0/|
         .-'     / \`)              \\       .-""""""--.
        /          /              .-'-----/           \\
       /          /\`\\                          () ()  /
      /          |   '-.___.                          |
     ;           \\      |/ \`\\                         /
    /             |.---.\`.-. '.___              ___.-'
  /'              |     \\   \\ \\ |/\`'-.,____..-\`\`|/
                  \\  ,   \\   \\ \\\`,       |/     \`
                   \\/|    \\   \\ /|       \`
                    \\/     \`   ;-\`'.   ,        ${l}${l}
                     \`'-.   ,   '.  '-/|    ,    ${l}${l}
                         './|     '-. \`\`;--/|-.   ${l}${l}
                           '\`'--.,___) /|.-'"\` )   ${l}${l}
                      '--._          \`"\`    .-'    ${r}${r}
                         .-\`'-._          .'      ${r}${r}
                       .'       \`\`''---''\`       ${r}${r}
                                                ${r}${r}
` + createSpeechBubble(50, text)
