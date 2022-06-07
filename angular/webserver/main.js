const mysql = require('mysql');
const express = require('express');

console.log('Connecting to db');
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'project'
}, (err) =>
{
    console.log('createconnection callback')
    if (!err)
    {
        console.log('Database connected');
    }
    else
    {
        console.log(err);
    }
});

const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));


app.use(express.json());


app.post('/login', (request, response) =>
{
    const user = request.body;

    const username = user.username;
    const password = user.password;

    con.query("select * from users where username=? and password=?", [username, password], (err, res) =>
    {

        if (err)
        {
            console.error(err);
            res.message = err;
            response.send({ status: 'failed' });
        }
        else
        {
            if (res.length > 0)
            {
                const result = {};
                result.status = 'success';
                result.user = res[0];
                response.send(result);
            }
            else
            {
                const result = {};
                result.status = 'failed';
                result.message = 'Incorrect username or password';

                response.send(result);
            }
        }
    });
});

app.get('/getallusers', (request, response) =>
{
    con.query("select * from users", (err, res) =>
    {
        response.send(res);
    });
});

app.post('/adduser', (request, response) =>
{
    const user = request.body;

    const username = user.username;
    const password = user.password;

    con.query("insert into users values (0,?,?)", [username, password], (err, res) =>
    {
        const result = {};
        if (err)
        {
            result.status = 'failed';
            result.message = err;
        }
        else
        {
            result.status = 'success';
            result.message='User added successfully';
        }
        response.send(result);
    });
});

app.listen(8000);