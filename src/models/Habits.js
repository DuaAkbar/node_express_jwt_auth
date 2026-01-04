import mongoose from "mongoose";

const HabitsSchema = mongoose.Schema({
    UserName : String,
    Title : String,
    Description : String,
    Frequency : String,
    StartDate : Date,
    IsActive : Boolean,
});

export default mongoose.model("Habits" , HabitsSchema)