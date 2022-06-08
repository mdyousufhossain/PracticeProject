const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});


console.log(isItDoneYet)

const newPromise = new Promise((agreed,notHappeing) => {
    if(done){
        const wellWork = 'builed it';
        agreed(wellWork);
    } else {
        const didnt = 'not gonna';
        notHappeing(didnt)
    }
})

console.log(newPromise)