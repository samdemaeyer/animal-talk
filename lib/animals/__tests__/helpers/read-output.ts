import fs from 'fs'
import path from 'path'
import type { Animal } from '../../../types'

export const readOutput = (animal: Animal) => fs.readFileSync(path.join(__dirname, `../outputs/${animal}.txt`), 'utf8')
