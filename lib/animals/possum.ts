import { l, r } from '../utils/directions'
import type { AnimalArgs } from './types'

export const possum = ({ createTextBaloon, text }: AnimalArgs) =>
  createTextBaloon(32, text) +
  `
                               ${l}
              :     :           ${l}
        __    |     |    _,     ${r}
       (  ~~^-l_____],.-~  /   ${r}
        \\    ")\\ "^k. (_,-"   ${r}
         \`>._  ' _ \`\\  \\     ${r}
      _.-~/'^k. (0)  \` (0   ${r}
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
