require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./db');
const userRoutes = require("./routes/users"); 
const authRoutes = require("./routes/auth");
const formRoutes = require("./routes/forms");


const app = express();
//database connection
connect();
//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/form",formRoutes);


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});


