import { getRandomJoke, jokes } from './random-joke'

describe('getRandomJoke', () => {
  it('should return null if no color is passed', () => {
    const randomJoke = getRandomJoke()
    expect(randomJoke).toBe(jokes.find(j => j === randomJoke))
  })
})
