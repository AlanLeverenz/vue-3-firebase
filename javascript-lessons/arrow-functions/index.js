function greetOne() {
  console.log('hello')
}

greetOne()

const greetTwo = () => {
  console.log('hello again')
}

const names = ['alan','tess', 'eric']
names.map((name) => {
  return console.log(`hello ${name}`)
})

names.map((name) => console.log(`hello ${name}`))