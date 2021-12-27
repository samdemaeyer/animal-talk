import { TEXT_PREFIX, TEXT_SUFFIX } from './create-text-baloon'

export const generateFirstAndLastRow = (text: string) => {
  const totalChars = text.length + TEXT_PREFIX.length + TEXT_SUFFIX.length
  return Array.from({ length: totalChars }, () => '-').join('')
}
