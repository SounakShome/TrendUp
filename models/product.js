import mongoose from "mongoose";

const ProductShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    size: {
        type: String
    },
    colour: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    availQty: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

mongoose.models = {};

export default mongoose.model("Product", ProductShema);