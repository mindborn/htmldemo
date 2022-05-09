const mysql=require('mysql');

const conn=mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'northwind'
});

conn.connect((err)=>{
	if(err)
	{
		console.log('error in connection');
		return;
	}
	
	console.log('connected');
});
