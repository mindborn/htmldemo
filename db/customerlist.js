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
	
	//console.log('connected');

	conn.query('select * from customers',(err,customers)=>{
		if(err)
		{
			console.log('error while getting data');
			return;
		}
		//console.log(res);
		for(let c of customers)
		{
			console.log(c.first_name,c.last_name);
		}
	});
});
