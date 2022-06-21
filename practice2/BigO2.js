const numbers = [1, 2, 3, 4, 5];

function logEverythingTwice(itmes) {
  for (let i = 0; i < itmes.length; i++) {
    // O(N)
    console.log(itmes[i]); // O(1)
  }
  for (let i = 0; i < itmes.length; i++) {
    // O(N)
    console.log(itmes[i]); // O(1)
  }
}

logEverythingTwice(numbers);

function logEverythinFiveTimes(items) {
  for (let i = 0; i < items.length; i++) {
    // O(N)
    for (let j = 0; j < items.length; j++) {
      // O(N`)
      console.log(items[i]); // O(1)
    }
  }
}

function printMultiplesThenSum(items) {
  for (let i = 0; i < items.length; i++) {
    // O(N)
    for (let j = 0; j < items.length; j++) {
      // O(N)
      console.log(items[i]); // O(1)
    }
  }
  const sum = items.reduce((acc, item) => {
    // O (N)
    return (acc += item); // O(1)
  }, 0);
  return sum; // O(1)
}
