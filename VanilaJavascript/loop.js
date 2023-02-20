const student = [

    ["akira","ikimono","ghakari","nujan"],
    ["vera","bokri","bokri","ghada"],
    [ "diya","pad","jeje","pada","adha"]

]


const fistTry1 = student[0][0];
console.log(fistTry1)

const fistTry = student[0];
console.log(fistTry)

const seconed = fistTry[0]




console.log(seconed)

console.log(fistTry1 === seconed)


// this function will printout nested array 

function  tesingLoops(arr){
    for(let i = 0 ; i < arr.length ; i++ ){
        const row = arr[i]
        console.log(`Line ${i + 1}`)
        for(let j = 0 ; j < row.length; j++){
            console.log(` This row ${row[j]}`)
        }
    }

}

