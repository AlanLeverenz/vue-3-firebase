// do not assign fetch to a constantbundleRenderer.renderToStream// will just return a promise

// non-blocking code (doesn't keep other code from running)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res) => {
//   console.log(res)
// })

console.log('hello')

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json()) //.json is a method to pass data
.then(data => console.log(data))