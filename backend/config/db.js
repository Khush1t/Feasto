import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://khush123098:password@cluster0.mkwfq0f.mongodb.net/food-del')
        .then(() => console.log("DB Connected"));
}