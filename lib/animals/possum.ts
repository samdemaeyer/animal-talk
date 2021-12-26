import type { TextBaloon } from '../utils'

export const possum = ({ firstRow, middleRow, lastRow }: TextBaloon) => {
  return `
                    ${firstRow}
                    ${middleRow}
                    ${lastRow}
                               \\
              :     :           \\
        __    |     |    _,     /
       (  ~~^-l_____],.-~  /   /
        \\    ")\\ "^k. (_,-"   /
         \`>._  ' _ \`\\  \\     /
      _.-~/'^k. (0)  \` (0   /
   .-~   {    ~\` ~    ..T
  /   .   "-..       _.-'
 /    Y        .   "T
Y     l         ~-./l_
|      \\          . .<'
|       \`-.._  __,/"r'
l   .-~~"-.    /    I
 Y         Y "~[    |
  \\         \\_.^--, [
   \\            _~> |
    \\      ___)--~  |
     ^.       :     l
       ^.   _.j     |
         Y    I     |
         l    l     I
          Y    \\    |
           \\    ^.  |
            \\     ~-^.
             ^.       ~"--.,_
              |~-._          ~-.
              |    ~Y--.,_      ^.
              :     :     "x      \\
                            \\      \\.
                             \\      ]
                              ^._  .^
                                 ~~
`
}
