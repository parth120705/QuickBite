import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI as string,{
            dbName:"QuickBite"
        });
        console.log("connected to db successfully")
    }catch(error){
        console.log(error);
    }
};
export default connectDB;