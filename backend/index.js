const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user.model'); 
const cors=require("cors")

const apiRoutes = require('./routes/api.route');
const userRoutes=require("./routes/user.route")
const {connection}=require("./config/db")

app.use(cors())
app.use(express.json());
app.use('/album', apiRoutes);
app.use('/user', userRoutes);


app.get("/",(req,res)=>{
    res.send("WELCOME TO PHOTO-ALBUM-BACKEND")
})



app.listen(PORT, async() => {
    try{
        await connection
        console.log("connected to database")
    }
    catch(err){
        console.log("can not connect to the database")
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port}`)   
});


