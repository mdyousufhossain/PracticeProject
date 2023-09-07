const fsPromises = require('fs').promises
const path = require('path');
const EventEmitter = require('events')
const  logEvents  = require('./logEvent')


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('log',(msg) => logEvents(msg))


setTimeout(() => {
    myEmitter.emit('log','log event emitted');
})










// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8')
//         console.log(data)
//         await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)
//         await fsPromises.appendFile(path.join(__dirname , 'files','promiseWrite.txt'),'\n buni tuk')
//         await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','PromiseComplete.txt '))
//         // const newData =  await fsPromises.readFile(path.join(__dirname,'files','PromiseComplete.txt'),'utf8')
//         // console.log(newData)
//     } catch (error) {
//         console.error(error)
//     }
// }

// fileOps()

// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8', (err, data) => {
//     if(err) throw err ;
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname,'files','replay.txt'),'fakko you',(err) => {
//     if(err) throw err ;
//     console.log('Write complete')

//     fs.appendFile(path.join(__dirname,'files','replay.txt'),'\n\ntesting append',(err) => {
//         if(err) throw err ;
//         console.log('append complete')
//     })
// })



process.on('uncaughtException',err => {
    console.error(`There was an uncaugt error: ${err}`);
    process.exit(1)
})