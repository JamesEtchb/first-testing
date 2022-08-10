import { multi, sum } from '../src/index.js'

it('should add 2 numbers and return the sum', () => {
  //arrange
  const a = 4,
    b = 5,
    expected = 9

  //act
  const actual = sum(a, b)

  //assert
  expect(actual).toBe(expected)
})

it('should add a number and null and return a mystery', () => {
  //arrange
  const a = null,
    b = 5,
    expected = 'The input is incorrect!'

  //act
  const actual = sum(a, b)

  //assert
  expect(actual).toBe(expected)
})

it('should add a number and null and return a error', () => {
  //arrange
  const a = 'str',
    b = 5,
    expected = 'are allowed'

  //act
  const actual = sum(a, b)

  //assert
  expect(actual).toContain(expected)
})

it('should multiply a number and return the sum', () => {
  //arrange
  const x = 5,
    y = 5,
    expected = 25

  //act
  const actual = multi(x, y)

  //assert
  expect(actual).toBe(expected)
})

it('should multiply a number and a str and return error', () => {
  //arrange
  const x = 5,
    y = 'str',
    expected = 'You didnt input a number'

  //act
  const actual = multi(x, y)

  //assert
  expect(actual).toBe(expected)
})
