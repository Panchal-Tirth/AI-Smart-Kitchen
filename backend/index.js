const express= require('express');

const app=express();
require("dotenv").config();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
