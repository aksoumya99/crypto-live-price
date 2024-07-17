import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
        const dbUri = <string>process.env.MONGO_URI;
        await mongoose.connect(dbUri);
        console.log("Database connected");
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;