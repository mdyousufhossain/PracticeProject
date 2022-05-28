// some functions
function foo() {
	console.log("foo")
}
function bar() {
	console.log("bar")
}

/*  due to the javascript event-loop behavior this code
	is going to be asynchronous but what does that mean?
    
    well, first you need to understand the concept of asynchronous, 
    In computer programming, asynchronous operation means that a 
    process operates independently of other processes. 
*/
setTimeout(foo, 2000)
console.log("faz")
bar()

// this code above is going to print out:
// "faz"
// "bar"
// "foo"

/* this happens because the event loop first executes all the synchronous code 
then waits for the timer to complete and then when it's done puts the callback 
that we passed it in as a first param in something called the task queue where 
it will be added to the call stack and executed */