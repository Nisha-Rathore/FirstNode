const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
const apiRouter = require("./Routes/api");
app.use("/api", apiRouter);

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})