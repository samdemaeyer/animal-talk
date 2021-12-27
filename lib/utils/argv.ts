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
        'elephant',
        'moose',
        'pig',
        'horse',
        'frog',
        'donkey',
        'possum',
        'snail',
        'lamb',
        'crocodile',
        'snake',
        'turtle',
        'random',
      ] as const,
    },
    c: {
      alias: 'color',
      describe: 'Choose a color',
      // @TODO: refactor to not duplicate color choices
      choices: [
        'black',
        'red',
        'green',
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'gray',
        'grey',
        'rainbow',
        'america',
        'random',
      ] as const,
    },
  })
  .parseSync()
