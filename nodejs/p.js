// const str = (x) => console.log(x)

// const str2 = (x) => x.toUpperCase() + " hey"

// passTest = (x) => x.toUpperCase() === "BUNI" ? "Loging":"false";

// const capitals = {
//   a: "Athens",
//   b: "Belgrade",
//   c: "Cairo"
// };

// for (let bal in capitals) {
//   console.log(bal + ": " + capitals[bal]);
// }

// const arr = ["bainchod", "khankir pola", "magirpola","buskir", "nodirpola"]
// const arr2 = ["1dide", "2uno", "3bigo","4nig", "6sigo"]

// for (let sal of arr2){
//   if (sal === "3bigo"){
//     for(let bal of arr){
//       console.log(bal)
//     }
//   }else{
//     console.log(sal)
//   }
// }


// for( i = 0 ; i < arr.length ; i++){
//   if(arr[i]==="bigo"){
//     for (let sal of arr2){
//       console.log(sal)
//     }
//   }
//   else{
//     console.log(arr[i])
//   }
// }

// let arr = []


// let i = 1;

// while (i < 11) {
//   arr.push(`${i}yah`)
//   i++;

//   if(arr.length >= 10){
//     for(bal of arr){
//       // console.log(bal)
//        switch(bal){
//         case '7yah':
//           console.log("yeah")
//         case '10yah':
//           console.log('finalOne')
//           break
//        }
//     }
//   }
// }


// let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
// "y","z"]
// let x = []

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}


// const a =  getRandomArbitrary(0,abc.length)
// const b =  getRandomArbitrary(0,abc.length)
// const c =  getRandomArbitrary(0,abc.length)
// const d =  getRandomArbitrary(0,abc.length)
// const e =  getRandomArbitrary(0,abc.length)

// while(x.length <= abc.length){
//   for(i of abc){
//     x.push(`${abc[a] + abc[b] + abc[c] + abc[d] + abc[e]}`)
//     if(x.length == abc.length){
//       console.log(x)
//     }
// }
// }

// let arr = [2,3,4,5]

// let ARR = [2]

// const concat = arr.entries()

// console.log(concat)

// for(const [index,item] of arr.entries()){
//   console.log(`${index} ${item}`)
// }

// const below = (x) => {x < 10 }

// const check = ARR.every(below)

// console.log(check)

const isBelowThreshold = (x) => x <= 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));