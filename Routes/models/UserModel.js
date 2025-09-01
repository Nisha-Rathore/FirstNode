const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type: String, required: true,},
    mobile:{type: Number, required: true, min:10,max:12},
    age:{type: Number, required: true, min:18, max:70},
    city:{type: String, required:true, enum:["Indore","Bhopal","Ujjain","Dewas","Mumbai","Pune","Delhi"]},
    country:{type: String, required:true, default:"India"},
    date:{type: Date, default: Date.now}

})
module.exports = mongoose.model("User", userSchema);