function memoize(fn) {
  return function (...args) {
    const values = args[0];
    let result = [];
    let count = 0;
    for (let i = 0; i < values.length; i++) {
      if (isNaN(fn(...values[i]))) {
        count = count + 1;
        result.push(count);
        continue;
      }
      result.push(fn(...values[i]));
    }
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount = callCount + 1;
  return a + b;
});

console.log(memoizedFn([[2, 2], [2, 2], [], [1, 2], []]));
