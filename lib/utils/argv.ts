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
        'cat',
        'crocodile',
        'donkey',
        'elephant',
        'frog',
        'happyDog',
        'horse',
        'lamb',
        'moose',
        'pig',
        'possum',
        'random',
        'snail',
        'snake',
        'turtle',
      ] as const,
    },
    c: {
      alias: 'color',
      describe: 'Choose a color',
      // @TODO: refactor to not duplicate color choices
      choices: [
        'america',
        'black',
        'blue',
        'cyan',
        'gray',
        'green',
        'grey',
        'magenta',
        'rainbow',
        'random',
        'red',
        'white',
        'yellow',
      ] as const,
    },
  })
  .parseSync()
