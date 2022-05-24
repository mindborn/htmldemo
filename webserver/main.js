const express=require("express")

const app=express();

app.get("/",(req,res)=>{
   res.send("Hello World"); 
});

app.get("/weather",(req,res)=>{
    res.send("Today's weather is 40C");
})

app.get("/getuser",(req,res)=>{

    const user ={username: 'abcd', age:40};

    res.send(user);

});

app.use(express.static("public"))

app.listen(8081);
console.log('Server started on 8081');