import yargs from 'yargs'

export const argv = yargs
  .usage('Usage: -t <text>')
  .options({
    t: { alias: 'text', describe: 'The text the animal will say', type: 'string', demandOption: true },
    a: {
      alias: 'animal',
      describe: 'Choose and animal',
      // @TODO: refactor to not duplicate animal choices
      choices: [
        'aardvark',
        'antelope',
        'bat',
        'bulldog',
        'bunny',
        'cat',
        'crocodile',
        'donkey',
        'elephant',
        'frog',
        'hangingMonkey',
        'happyDog',
        'horse',
        'lamb',
        'lion',
        'moose',
        'parrot',
        'pig',
        'possum',
        'prayingMonkey',
        'random',
        'snail',
        'snake',
        'teddyBear',
        'turtle',
        'worm',
      ] as const,
    },
    c: {
      alias: 'color',
      describe: 'Choose a color',
      // @TODO: refactor to not duplicate color choices
      choices: [
        'black',
        'blue',
        'cyan',
        'gray',
        'green',
        'grey',
        'magenta',
        'random',
        'red',
        'white',
        'yellow',
      ] as const,
    },
  })
  .parseSync()
