import mongoose from "mongoose";
const mongouri ="mongodb+srv://Stakes:A12345678@glabc.unjlu.mongodb.net/JourneyBot?retryWrites=true&w=majority"
const connecttomongo = () => {
    console.log(mongouri)
    mongoose.connect(mongouri)
}
export default connecttomongo
