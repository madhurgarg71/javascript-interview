function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, url);
  });
}

async function batchPromises(batchSize, ...promises) {
  const ans = [];
  for (let i = 0; i < promises.length; i += batchSize) {
    const batch = promises.slice(i, i + batchSize);
    const res = await processBatch(batch);
    ans.push(res);
  }

  function processBatch(batch) {
    return Promise.all(batch)
      .then((data) => {
        console.log("Batch processed", data);
        return data;
      })
      .catch((err) => err);
  }

  return ans;
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
];

const ans = batchPromises(
  2,
  fetchData(urls[0]),
  fetchData(urls[1]),
  fetchData(urls[2]),
  fetchData(urls[3]),
  fetchData(urls[4]),
  fetchData(urls[5])
);

// ans.then((data) => {
//   console.log("All data fetched", data);
// });
