const mongoose = require("mongoose")
const destination = new mongoose.Schema({
    x:{
        type:Number,
        required:true
    },
    y:{
        type:Number,
        required:true
    }
});
export const Dest = mongoose.models.Cords || mongoose.model("Cords",destination);