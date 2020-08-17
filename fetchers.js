const animalFetcher = (prefix, cb) => {
  setTimeout(() => {
    cb(["giraffe", "gorilla"]);
  }, Math.random() * 1000);
};

const fruitFetcher = (prefix, cb) => {
  setTimeout(() => {
    cb(["grapefruit", "guava"]);
  }, Math.random() * 1000);
};

const gemFetcher = (prefix, cb) => {
  setTimeout(() => {
    cb(["gem", "geode"]);
  }, Math.random() * 1000);
};

const flatten = (arr) => arr.reduce((a, i) => a.concat(i), []);

const combineFetchers = (fetchers) => (prefix, cb) => {
  Promise.all(
    fetchers.map(
      (fetcher) =>
        new Promise((resolve) => {
          fetcher(prefix, resolve);
        })
    )
  )
    .then(flatten)
    .then(cb);
};

var fetcher = combineFetchers([animalFetcher, fruitFetcher, gemFetcher]);

fetcher("abc", (results) => {
  console.log(results);
});
