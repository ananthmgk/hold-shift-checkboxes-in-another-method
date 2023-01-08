```
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]

```