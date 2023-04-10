import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"
const { Schema } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
    },
    price: Number,
},{timestamps:true, versionKey:false});

productSchema.plugin(mongoosePaginate)

export default mongoose.model("Product", productSchema);
