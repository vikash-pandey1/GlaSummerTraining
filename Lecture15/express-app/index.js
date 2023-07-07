const express = require('express');// returns a function
const app = express();// returns an obj

app.use((req,res)=>{
    console.log("sam");
    res.send('request sent successfully')
})
app.listen(8081,()=>{
    console.log("server connect hogya at port 8080");
})