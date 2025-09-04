const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type: String, required: true,},
    email:{type: String, required: true, unique:true},
    age:{type: Number, required: true, min:18, max:70},
    // mobile:{type: Number, required: true, min:10,max:12},
    // city:{type: String, required:true, enum:["Indore","Agra","Ujjain","Dewas","Mumbai","Pune","Delhi"]},
    // country:{type: String, required:true, default:"India"},
    // date:{type: Date, default: Date.now}

},{
    timestamps:true
})
module.exports = mongoose.model("User", userSchema);