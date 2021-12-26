import type { TextBaloon } from '../utils'

export const snake = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
  ${firstRow}
  ${middleRow}
  ${lastRow}
      /
     /
    /       /^\\/^\\
    \\     _|__|  O|
 \\/  \\  /~     \\_/ \\
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
}
