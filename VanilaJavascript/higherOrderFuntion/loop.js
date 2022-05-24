// itarating array

const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

//itarating object
const arr = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of arr) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of arr) {
  console.log(key,value);
}
// 1
// 2
// 3

const newArr = [1,2,3,4];

console.log(newArr.map(x => x*2))


const numbers = [1, 4, 9,12,16,49];

const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

const kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value}) => ({ key }));

console.log(reformattedArray)
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]



