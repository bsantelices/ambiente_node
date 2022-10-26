const palindrome1 = 'racecar'
const palindrome2 = 'sanas'
const phrasePalindrome1 = 'Amad a la dama'
const phrasePalindrome2 = 'Atar a la rata'
const phrasePalindrome3 = 'Yo soy'

const notPalindrome1 = 'palindrome'
const notPalindrome2 = 'sdghjgjsadashd'
const phraseNotPalindrome1 = 'No soy palindromo'
const phraseNotPalindrome2 = 'No soy palindromo sdgyasbui'

const isPalindrome = (word: string) => {
  const cleanWord = word.toLowerCase().split(' ').join('')
  const cleanWord2 = word.toLowerCase().trim()
  console.log(cleanWord)
  console.log(cleanWord2)
  const reverseWord = cleanWord.split('').reverse().join('')

  return cleanWord === reverseWord
}

// console.log(isPalindrome(phrasePalindrome1))

const board: string[][] = [
  ['0', 'X', 'X'],
  ['X', '0', '0'],
  ['X', '0', 'X'],
]

const numberOfShipsNico = (board: string[][]): number => {
  const length = board.length
  let countOfShips = 0
  board.forEach((row, indexRow) => {
    row.forEach((element, indexColumn) => {
      if (element === 'X') {
        countOfShips += 1
        board[indexRow][indexColumn] = '0' //se encontro el barco

        let continueSearching = true
        let isHorizontal = false
        // se busca hacia la derecha
        let iteratorIndex = 1
        while (continueSearching && indexColumn + iteratorIndex < length) {
          if (board[indexRow][indexColumn + iteratorIndex] === 'X') {
            isHorizontal = true
            board[indexRow][indexColumn + iteratorIndex] = '0' //se borra
          } else {
            continueSearching = false
          }
          iteratorIndex += 1
        }
        // se busca hacia abajo
        if (!isHorizontal) {
          let continueSearching = true
          let iteratorIndex = 1

          while (continueSearching && indexRow + iteratorIndex < length) {
            if (board[indexRow + iteratorIndex][indexColumn] === 'X') {
              board[indexRow + iteratorIndex][indexColumn] = '0' //se borra
            } else {
              continueSearching = false
            }
            iteratorIndex += 1
          }
        }
      }
    })
  })
  return countOfShips
}

// console.log(numberOfShipsNico(board))

const randomNumber = (limit: number) => Math.floor(Math.random() * limit)

function isAlreadyExists(array: number[][], a: number[]) {
  const result = array.some(element => {
    if (JSON.stringify(element) == JSON.stringify(a)) {
      return true
    }

    return false
  })

  return result
}

function threeSum(nums: number[]): number[][] {
  const response: number[][] = []
  nums.forEach((firstElem, index1) => {
    nums.forEach((secondElem, index2) => {
      if (index1 != index2) {
        nums.forEach((thirdElem, index3) => {
          if (index1 != index2 && index2 != index3 && index1 != index3) {
            if (firstElem + secondElem + thirdElem === 0) {
              const newValue: number[] = [
                firstElem,
                secondElem,
                thirdElem,
              ].sort((a, b) => {
                return a - b
              })
              if (!isAlreadyExists(response, newValue)) response.push(newValue)
            }
          }
        })
      }
    })
  })
  return response
}
console.log(
  threeSum([
    -7, -10, -1, 3, 0, -7, -9, -1, 10, 8, -6, 4, 14, -8, 9, -15, 0, -4, -5, 9,
    11, 3, -5, -8, 2, -6, -14, 7, -14, 10, 5, -6, 7, 11, 4, -7, 11, 11, 7, 7,
    -4, -14, -12, -13, -14, 4, -13, 1, -15, -2, -12, 11, -14, -2, 10, 3, -1, 11,
    -5, 1, -2, 7, 2, -10, -5, -8, -10, 14, 10, 13, -2, -9, 6, -7, -7, 7, 12, -5,
    -14, 4, 0, -11, -8, 2, -6, -13, 12, 0, 5, -15, 8, -12, -1, -4, -15, 2, -5,
    -9, -7, 12, 11, 6, 10, -6, 14, -12, 9, 3, -10, 10, -8, -2, 6, -9, 7, 7, -7,
    4, -8, 5, -4, 8, 0, 3, 11, 0, -10, -9,
  ]),
)
