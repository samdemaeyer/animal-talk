import fs from 'fs'
import path from 'path'

export const readOutput = (outputFileName: string) =>
  fs.readFileSync(path.join(__dirname, `../outputs/${outputFileName}.txt`), 'utf8')
