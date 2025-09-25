import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://khush123098:khush1t.312@cluster0.mkwfq0f.mongodb.net/food-del')
        .then(() => console.log("DB Connected"));
}