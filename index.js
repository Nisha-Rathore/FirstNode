const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req,res) => {
  
    try{
         const data = {
        id: 1,
        name: "Nisha",
        age: 29,
        city: "Indore",
        village: "Bargawan",
        state: "Madhya Pradesh",
        country: "India"
    }
     res.json({data:data, status:"200", message: "Data fetched successfully" , success: true});
    }
    catch(err){
        res.json({erroe:err , status: "500" , message: "Internal server error" , success: false});
    }
    res.send("Hello Nisha");
})

app.get("/data", (req,res) => {

    const data = {
        id: 1,
        name: "Kalua",
        age: 21,
        city: "Mathura"
    }
    res.json(data);
    res.send("Hello Kalu");
})

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})