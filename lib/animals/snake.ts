import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const snake = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 9) +
  `
      ${r}
     ${r}
    ${r}       /^\\/^\\
    ${l}    _|__|  O|
 \\/  ${l} /~     \\_/ \\
  \\____|__________/  \\
         \\_______      \\
                 \`\\     \\                 \\
                   |     |                  \\
                  /      /                    \\
                 /     /                       \\\\
               /      /                         \\ \\
              /     /                            \\  \\
            /     /             _----_            \\   \\
           /     /           _-~      ~-_         |   |
          (      (        _-~    _--_    ~-_     _/   |
           \\      ~-____-~    _-~    ~-_    ~-_-~    /
             ~-_           _-~          ~-_       _-~
                ~--______-~                ~-___-~

`
