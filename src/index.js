export const sum = (a, b) => {
  if (!a || !b) {
    return 'The input is incorrect!'
  } 

  if(typeof(a) != 'number' || typeof(b) != 'number') {
    return 'Only numbers are allowed'
  }

  return a + b
}

export const multi = (x, y) => {
    if (!x || !y) {
        return 'You input something wrong!'
    }

    if (typeof(x) != 'number' || typeof(y) != 'number') {
        return 'You didnt input a number'

    }
    
    return x * y

}
