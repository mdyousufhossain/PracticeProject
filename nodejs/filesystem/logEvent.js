const { format } = require('date-fns');

const { v4:uuid } = require('uuid');

const fs = require('fs');
const fsPromises  = require('fs').promises;
const path = require('path');


const logEvents = async (message) => {
    const dateTime = `${format(new Date(),'yyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem)
    
    try { 
        if(!fs.existsSync(path.join(__dirname,'files'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname,'files','eventLog.txt'),logItem)

    } catch (error) {
        console.error(error)
        
    }
}

module.exports = logEvents