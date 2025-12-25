import mongoose from "mongoose"

const connectDB = async () => {
    try {
        //if connection successfull than this function works
        mongoose.connection.on('connected', () => {
            console.log("Database Connected")
        })
        
        //actual connection 
        await mongoose.connect(`${process.env.MONGODB_URI}/dailyd`)

    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB