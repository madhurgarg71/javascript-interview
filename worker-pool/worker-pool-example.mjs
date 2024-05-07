// Import the WorkerPool class
import WorkerPool from "./WorkerPool.mjs";
// Import the WorkerPool class

// Function that returns a Promise that resolves after fetching data from a URL
function fetchData(url) {
  return fetch(url).then((response) => response.json());
}

// Create a new WorkerPool with a maximum of 5 active workers
const workerPool = new WorkerPool(2);

// List of working URLs to fetch data from
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
];

// Add a task to the WorkerPool for each URL
const tasks = urls.map((url) => {
  return workerPool.addTask(() => fetchData(url));
});

console.log(tasks);

// Wait for all tasks to complete
Promise.all(tasks)
  .then((data) => {
    console.log("All data fetched", data);
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  });
