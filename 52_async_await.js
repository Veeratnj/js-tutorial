// 52_async_await.js
// Using async/await to handle Promises

async function demo() {
  // Example with fetch (browser or node with global fetch)
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const data = await res.json();
  // console.log(data);
  return 'async result';
}

demo().then(r => console.log(r));