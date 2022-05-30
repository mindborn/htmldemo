const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'college'
});

conn.connect((err) =>
{
    if (err)
    {
        console.log('error in connection');
        return;
    }

    console.log('connected');
});

const app = express();

app.use(express.json());

app.get("/employee", (req, response) =>
{
    conn.query("select * from employee", (err, result) =>
    {
        if (!err)
        {
            response.send(result);
        }
        else
        {
            console.log(err);
        }
    });
});

app.get("/employee/:id",(req,response)=>{
    conn.query("select * from employee where empid=?",[req.params.id],(err,result)=>{
        response.send(result);
    });
});

app.post("/employee",(req,response)=>{
    const employee=req.body;

    conn.query("insert into employee (name,salary) values (?,?)",[employee.name,employee.salary],(err,result)=>{
        const r={status:'ok'};
        response.send(r);
    });
});

app.put("/employee",(req,response)=>{
    const employee=req.body;

    conn.query("update employee set name=?, salary=? where empid=?",[employee.name,employee.salary, employee.empid],(err,result)=>{
        const r={status:'ok'};
        response.send(r);
    });
});

app.delete("/employee/:id",(req,response)=>{
    conn.query("delete from employee where empid=?",[req.params.id],(err,result)=>{
        const r={status:'ok'};
        response.send(r);
    });
});

app.listen(8000, (err) =>
{
    if (err)
    {
        console.log('Error while starting server', err);
    }
    else
    {
        console.log('Server started on 8000');
    }
});