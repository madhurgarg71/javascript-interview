Array.prototype._map = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

const ans = [1, 2, 3]._map((val) => {
  return val * 2;
});

console.log(ans);
