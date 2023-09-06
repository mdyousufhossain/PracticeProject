const fs = require('fs')
const path = require('path');

fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8', (err, data) => {
    if(err) throw err ;
    console.log(data)
})

fs.writeFile(path.join(__dirname,'files','replay.txt'),'fakko you',(err) => {
    if(err) throw err ;
    console.log('Write complete')

    fs.appendFile(path.join(__dirname,'files','replay.txt'),'\n\ntesting append',(err) => {
        if(err) throw err ;
        console.log('append complete')
    })
})



process.on('uncaughtException',err => {
    console.error(`There was an uncaugt error: ${err}`);
    process.exit(1)
})