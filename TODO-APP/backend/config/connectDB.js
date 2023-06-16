const mongoose = require("mongoose")


// setting updatabase
const connectDB =  async () => {
    try {
        const connect =  await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongodb connected`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}




module.exports = connectDB