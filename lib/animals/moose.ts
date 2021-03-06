import { r } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const moose = ({ createSpeechBubble, text }: AnimalArgs) =>
  `
                                      _.--"""--,
                                    .'          \`\\
  .-""""""-.                      .'              |
 /          '.                   /            .-._/
|             \`.                |             |
 \\              \\          .-._ |          _   \\
  \`""'-.         \\_.-.     \\   \`          ( \\__/
        |             )     '=.       .,   \\
       /             (         \\     /  \\  /
     /\`               \`\\        |   /    \`'
     '..-\`\\        _.-. \`\\ _.__/   .=.
        / |  _    / \\  '.-\`    \`-.'  /
          \\_/ |  |   './ _     _  \\.'
               '-'    | /       \\ |
                      |  .-. .-.  |
                      \\ / o| |o \\ /
                       |   / \\   |
                      / \`"\`   \`"\` \\
                     /             \\
                    | '._.'         \\
                    |  /             |
                     \\ |             |
                      ||    _    _   /
                   ${r}  /|\\  (_\\  /_) /
                  ${r}    \\ \\'._  \` '_.'
                 ${r}      \`""\` \`"""\`
                ${r}
` + createSpeechBubble(text, 17)
