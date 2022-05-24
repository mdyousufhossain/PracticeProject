const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
const arr = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of arr) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of arr) {
  console.log(value);
}
// 1
// 2
// 3

const newArr = [1,2,3,4];

console.log(newArr.map(x => x*2))



