import mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017/Peto"

const main = async () => {
    try{
        await mongoose.connect(mongoDB)
        console.log("MongoDB connected")
    }catch(err){
        console.log(err)
    }
}

main();

export default mongoose;
