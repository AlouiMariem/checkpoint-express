const express = require("express");
const app = express();
const path = require("path");




const workingtime = require("./middleware/middleware");
app.use(workingtime);


const port = 4000; 

app.use(express.static(path.join(__dirname, './pages')));


app.listen(port,()=>console.log(`app is working on port ${port}`));