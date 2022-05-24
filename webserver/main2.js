const express=require('express');

const app=express();

const users = {
    1: {id:1, firstname: 'Issac', lastname:'Newton' },
    2: {id:2, firstname: 'Albert', lastname:'Einstein' },
};

app.use(express.json());

app.get("/user",(req,res)=>{   // select * from user
    res.send(users);
});

app.get("/user/:id",(req,res)=>{  //select * from user where userid=?
    const id=req.params.id;

    res.send(users[id]);
});

app.post("/user",(req,res)=>{   //insert into user values ...
    const o=req.body;
    console.log(o);
    users[o.id]=o;
    res.send({status:'success'});
});

app.put("/user",(req,res)=>{  // update user set ... where userid=?
    const o=req.body;
    console.log(o);
    users[o.id]=o;
    res.send({status:'success'});
});

app.listen(8080);