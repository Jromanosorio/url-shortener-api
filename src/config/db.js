import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect(process.env.DBURL)
}

export {
    connectDB
}