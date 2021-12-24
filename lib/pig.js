const colors = require('colors');

module.exports = function ({ firstRow, middleRow, lastRow }) {
  return colors.magenta(`
                         /\\                  ${firstRow}
                        /  \`.               ${middleRow}
                      ,'     \`.              ${lastRow}
       /\`.________   (         :                /
       \\          \`. _\\_______  )              /
        \\ \`.----._  \`.        "\`-.            /
         )  \\     \\   \`       ,"__\\          /
         \\   \\     )    ,--    (/o\\\\        /
     (  _ \`.  \`---'     ,--.    \\ _)).     /
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
`)
}
