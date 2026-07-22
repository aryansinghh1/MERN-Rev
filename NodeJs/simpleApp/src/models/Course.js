import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        
    },
    instructor: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    level:{
        type: String,
        enum:['Beginner','Intermediate','Advance'],
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }

})