const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req, res) => {
    try{
    const data = [
        {
            id: 1,
            name: "John Doe",
            age: 30,
            city: "New York",
            country: "USA"
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 25,
            city: "Los Angeles",
            country: "USA"
        },
        {
            id: 3,
            name: "Sam Brown",
            age: 28,
            city: "Chicago",
            country: "USA"
        },
        {
            id: 4,
            name: "Lucy Green",
            age: 22,
            city: "Houston",
            country: "USA"
        },
        {
            id: 5,
            name: "Mike White",
            age: 35,
            city: "Phoenix",
            country: "USA"
        },
        {
            id: 6,
            name: "Emma Black",
            age: 27,
            city: "Philadelphia",
            country: "USA"
        }
    ];
        res.json({data: data, status: "200", message: "Data featched succcessfully", success: true});
    } catch(error){
        res.json({error: error, status: "500", message: "Internal server error", success: false});
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})