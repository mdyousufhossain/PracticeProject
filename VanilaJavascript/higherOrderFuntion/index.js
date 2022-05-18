const someArr = [
    {name:'yousuf', roll:562401, isPassed:false },
    {name:'sabbir', roll:562252, isPassed:true  },
    {name:'Sabrina', roll:562423, isPassed:true  },
    {name:'Zeke', roll:562425, isPassed:false },
    {name:'nahar', roll:563302, isPassed:true  },
    {name:'adriana', roll:561301, isPassed:false }
]

// filter

const isTrue = someArr.filter(arr => arr.isPassed ? console.log(`pass: ${arr.isPassed}`):console.log('coudnt make it')  ),

isName = someArr.filter(trueName => trueName.name.length <= 5 ? console.log(`There is ${trueName.name}`) : false ),

namless = (isTrue) => isTrue.isPassed ? console.log(`There is their role ${isTrue.roll}`):console.log(`This guys failed ${isTrue.roll}`),

isPassed = someArr.filter(namless)