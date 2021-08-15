const ninjas = ['shaun','mario','peach']
const blog = { title: 'new blog', author: 'bowser'}

console.log(ninjas)
console.log(...ninjas)

// can spread an object and add properties to it
const idBlog = {...blog, id: 1}
console.log(idBlog)