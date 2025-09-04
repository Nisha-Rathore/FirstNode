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

router.delete("/delete", (req, res) => {

  try {
    const data=[
      {
        id: 1,
        name: "John Doe",
        age: 30,
        city: "New York",
        country: "USA",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 25,
        city: "Los Angeles",
        country: "USA",
      },
      {
        id: 3,
        name: "Sam Brown",
        age: 28,
        city: "Chicago",
        country: "USA",
      },
      {
        id: 4,
        name: "Lucy Green",
        age: 22,
        city: "Houston",
        country: "USA",
      },
      {
        id: 5,
        name: "Mike White",
        age: 35,
        city: "Phoenix",
        country: "USA",
      },
      {
        id: 6,
        name: "Emma Black",
        age: 27,
        city: "Philadelphia",
        country: "USA",
      },
    ];
    res.json({
      data: data,
      status: "200",
      message: "Data featched succcessfully",
      success: true,
    });
  } catch (error) {
    res.json({
      error: error,
      status: "500",
      message: "Internal server error",
      success: false,
    });
  }
});

// fifth part

router.put("/update",(req, res) => {
  try {
    const data = {
      id: 1,
      name: "Nisha",
      age: 29,
      city: "Indore",
      village: "Bargawan",
      state: "Madhya Pradesh",
      country: "India",
    };
    res.json({
      data: data,
      status: "200",
      message: "Data fetched successfully",
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
