import mongoose from "mongoose";

const connectdb =async ()=>{
   try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connected successfully")

   } catch (error) {
     console.log(error)
     process.exit(1)
   }
}


export default connectdb