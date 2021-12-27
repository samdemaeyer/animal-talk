# animal-talk

Animal Talk is a global CLI tool where the animals can talk and they will say what you want them to say.

## Installation

Simply install the tool through npm or yarn

#### NPM

```bash
$ npm install -g animal-talk
```

#### Yarn

```bash
$ yarn global add animal-talk
```

## Usage

When using the `animaltalk` command, there are some options that can be specefied.

#### Options

| Option             | input                                                                                                                                  | required |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `-t` \| `--text`   | text to pass through to the animal                                                                                                     | yes      |
| `-a` \| `--animal` | `aardvark`, `elephant`, `moose`, `pig`, `horse`, `frog`, `donkey`, `possum`, `snail`, `lamb`, `crocodile`, `snake`, `turtle`, `random` | no       |
| `-c` \| `--color`  | `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`, `grey`, `rainbow`, `america`, `random`                  | no       |

#### Example

```bash
$ animaltalk -t 'Hello there, how are you?' -a pig -c magenta

                         /\                  ---------------------------------
                        /  `.               <   Hello there, how are you?   >
                      ,'     `.              ---------------------------------
       /`.________   (         :                /
       \          `. _\_______  )              /
        \ `.----._  `.        "`-.            /
         )  \     \   `       ,"__\          /
         \   \     )    ,--    (/o\\        /
     (  _ `.  `---'     ,--.    \ _)).     /
      `(-',-`----'     ( (O \    `--,"`-.
        `/              \ \__)    ,'   O )
        /                `--'     (  O  ,'
       (                           `--,'
        \                    `==  _.-'
         \              .____.-;-'
          ) `._               /
         (    |`-._\    | ,' /
          `.__|__/ "\   |'  /
                     `._|_,'
```

The output will be in color as the image below illustrates
![Output example](./docs/output.png)
