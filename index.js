const express = require("express");
const app = express();
require("dotenv").config();

const homeRoutes = require("./routes/home.routes");

app.use(express.json());

app.use("/", homeRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}/`)
})
