const express= require('express')
const app= express();
//create a simple route when 'name' is accessed and some data is sent to whoever is querying it.
app.get('/names',(req,res)=>{   
    res.send("Khushi"); // when app.get() is used then a name=Khushi is sent to that person
})

//The app is run on port:5000 using app.listen()
app.listen(5000, () =>{
    console.log("Server is runnong on port: 5000");
} )
