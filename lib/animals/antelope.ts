import { r, l } from '../utils/directions'
import type { AnimalArgs } from '../types'

export const antelope = ({ createSpeechBubble, text }: AnimalArgs) =>
  createSpeechBubble(text, 20) +
  `
                 ${r}
                ${r}      _,;
               ${r}    ,-','         |\\
              ${r}    ( (          _/ |
             ${r}      \\ \\     ,-''_,'
            ${r}   |\`-._\\ \`.-,' ;',--'\\  _...._
           ${r}    \`.__/         / _,-'-'    , \`.
           ${l}        ),    ()   \`-'     ,      \\
            ${l}       ;  "    ;   ,         ,    :
             ${l}    ,'      ,'       ,           :
                 (_)  __,'    ,     ,      ,   :
                  \`''   \\ _. ;         ,   ,   |
                         . -'     ,            \\
                         \\    ,         ,      \\
                          .         ,   _.. ,  \\
                          ' .. ,'    _,'   \\   |
                           \\\` '    ;'\\  '   \\  \\
                           ;\`--|  ;   \\  \\   \\  \\
                          ;  ; ;  ;    '  :   .  \`,
                          ;  ; ;  |    :  ;    \\  ;
                         ;  ;  ;  ;    ;  ;     : ;
                         ;  ; ;  ;     ; ;      ; ;
                        ;  ;  ;  ;    ; ;       ; ;
                        ; ;   ; ;    ; ;        ; ;
                       ; ;    ; ;   ;_|         ; ;
                       ; ;   ; ;               /_ |
                      ; ;    ; ;
                     /__:   ;_ |
`
