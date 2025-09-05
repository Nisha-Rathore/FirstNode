const express = require("express"); // require express
const router = express.Router(); // create router instance
const mongoose = require("mongoose"); // require mongoose
const User = require("./models/UserModel"); // require User model

// define routes

// first part
router.post("/create", async(req, res) => {
try{
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
     await user.save();
     res.json({
      data: user,
      status:"201",
      message:"User created successfully",
      success:true,
     }) 

}catch(err){
  res.json({
    error: err,
    status:"500",
    message:"Internal server error",
    success:false,
  })
}
});

// Second part
router.get("/list",async (req, res) => {
  try {
    const list = await User.find();
     res.json({
      data: data,
      status: "200",
      message: "Data fetched successfully",
      success: true,
    });
  } catch (err) {
    res.json({
      error: err,
      status: "500",
      message: "Internal server error",
      success: false,
    });
  }
});


// third part
router.get("/details",async(req,res) => {
  try{
    const detail = await User.findById(res.body.id);
 res.json({
      data: detail,
      status:"201",
      message:"User created successfully",
      success:true,
     }) 

}catch(err){
  res.json({
    error: err,
    status:"500",
    message:"Internal server error",
    success:false,
  })
}
})


// fourth part
router.get("/detailsbyemail",async(req,res) => {
  try{
    const detail = await User.findOne({email:res.body.email});
 res.json({
      data: detail,
      status:"201",
      message:"User created successfully",
      success:true,
     }) 

}catch(err){
  res.json({
    error: err,
    status:"500",
    message:"Internal server error",
    success:false,
  })
}
})

// fourth part
 router.delete("/delete/:user_id",async (req,res) =>{
  try{
    const detail = await User.findByIdAndDelete(req.body.user_id);
    res.json({
      data: detail,
      status:"200",
      message:"User deleted successfully",
      success:true,
    })
  } catch(err) {
    res.json({
    error: err,
    status:"500",
    message:"Internal server error",
    success:false,
  })
}
  }
  
 )

// fifth part

router.put("/update/:user_id",async (req, res) => {
  try {
   const update = await User.findByIdAndUpdate(req.params.user_id, req.body, {new:true})
    res.json({
      data: update,
      status: "200",
      message: "Data updated successfully",
      success: true,
    });
  } catch (err) {
    res.json({
      erroe: err,
      status: "500",
      message: "Internal server error",
      success: false,
    });
  }
});
// connect to MongoDB
mongoose.connect("mongodb+srv://rathorenisha397_db_user:FyD450e9i4dRHZyD@userdata.x6f1kdi.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })

  // handle connection error
module.exports = router;
