const express = require("express");
const cors = require('cors'); 
const bodyParser = require("body-parser")
const userRoute = require("./routers/user.routers");
const app_userRoute = require("./routers/app_user.routers");




const app = express();
app.use(cors());

app.use(bodyParser.json())
app.use("/",userRoute);
app.use("/",app_userRoute);


module.exports = app;