const str = (x) => console.log(x)

const str2 = (x) => x.toUpperCase() + " hey"

passTest = (x) => x.toUpperCase() === "BUNI" ? "Loging":"false";

const capitals = {
  a: "Athens",
  b: "Belgrade",
  c: "Cairo"
};

for (let bal in capitals) {
  console.log(bal + ": " + capitals[bal]);
}

const arr = ["bainchod", "khankir pola", "magirpola","buskir", "nodirpola"]
const arr2 = ["1dide", "2uno", "3bigo","4nig", "6sigo"]

for (let sal of arr2){
  if (sal === "3bigo"){
    for(let bal of arr){
      console.log(bal)
    }
  }else{
    console.log(sal)
  }
}


for( i = 0 ; i < arr.length ; i++){
  if(arr[i]==="bigo"){
    for (let sal of arr2){
      console.log(sal)
    }
  }
  else{
    console.log(arr[i])
  }
}

let arr = []


let i = 1;

while (i < 11) {
  arr.push(`${i}yah`)
  i++;

  if(arr.length >= 10){
    for(bal of arr){
      // console.log(bal)
       switch(bal){
        case '7yah':
          console.log("yeah")
        case '10yah':
          console.log('finalOne')
          break
       }
    }
  }
}