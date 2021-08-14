const ninjas = [
  { name: 'shaun', belt: 'black' },
  { name: 'mario', belt: 'orange' },
  { name: 'yoshi', belt: 'black' },
  { name: 'luigi', belt: 'green' },
]
// non-destructive methods, i.e., don't destroy the original array

// filter method

const blackBelts = ninjas.filter((ninja) => {
  return ninja.belt == 'black'
})

console.log(blackBelts)
console.log(ninjas)

// map method
const names = ninjas.map((ninja) => {
  return ninja.name
})

console.log(names, ninjas)
