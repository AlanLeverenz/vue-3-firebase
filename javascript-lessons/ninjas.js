const ninjas = ['shaun','yoshi','mario','peach']

const formatNinjas = () => {
  let val = ''
  ninjas.forEach(ninja => val+= ninja + ', ')
}

const greet = () => {
  console.log(ninjas[0] + ' says hello')
}

export { formatNinjas, greet }

// exports the value (not the object)
export default ninjas