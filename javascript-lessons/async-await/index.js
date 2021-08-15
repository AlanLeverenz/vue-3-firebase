// insert async method in the function

const getTodo = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json()
  console.log(data)
}

getTodo()

// .then(response => response.json()) 
// .then(data => console.log(data))