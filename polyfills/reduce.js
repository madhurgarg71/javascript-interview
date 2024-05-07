Array.prototype._reduce = function (reducer, initialValue) {
  //initialize accumulator if provided, otherwise use the first element

  let acc =
    initialValue === undefined || initialValue === null
      ? this[0]
      : initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = reducer(acc, this[i], i, this);
    console.log(acc);
  }

  return acc;
};

const ans = [1, 2, 3]._reduce((acc, val) => {
  return acc + val;
}, 0); // 6

console.log(ans);
