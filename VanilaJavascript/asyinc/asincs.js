// some functions
// function foo() {
// 	console.log("foo")
// }
// function bar() {
// 	console.log("bar")
// }

// /*  due to the javascript event-loop behavior this code
// 	is going to be asynchronous but what does that mean?
    
//     well, first you need to understand the concept of asynchronous, 
//     In computer programming, asynchronous operation means that a 
//     process operates independently of other processes. 
// */
// setTimeout(foo, 2000)
// console.log("faz")
// bar()

// this code above is going to print out:
// "faz"
// "bar"
// "foo"

/* this happens because the event loop first executes all the synchronous code 
then waits for the timer to complete and then when it's done puts the callback 
that we passed it in as a first param in something called the task queue where 
it will be added to the call stack and executed */

async function foo1() {
    const result1 = await new Promise((resolve) => setTimeout(() => resolve(console.log('1'))))
    const result2 = await new Promise((resolve) => setTimeout(() => resolve(console.log('2'))))
 }

 foo1()

 function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }
  
  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second()
    console.log(fast) // 3. this runs 3 seconds after 1.
  }
  
  async function concurrentStart() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds() // starts timer immediately
    const fast = resolveAfter1Second() // starts timer immediately
  
    // 1. Execution gets here almost instantly
    console.log(await slow) // 2. this runs 2 seconds after 1.
    console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
  }
  
  function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==')
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]) // slow
      console.log(messages[1]) // fast
    })
  }
  
  async function parallel() {
    console.log('==PARALLEL with await Promise.all==')
  
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async()=>console.log(await resolveAfter2Seconds()))(),
        (async()=>console.log(await resolveAfter1Second()))()
    ])
  }
  
  sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
  // wait above to finish
  setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"
  
  // wait again
  setTimeout(concurrentPromise, 7000) // same as concurrentStart
  
  // wait again
  setTimeout(parallel, 10000) // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"


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
