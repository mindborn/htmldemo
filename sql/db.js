const mysql=require('mysql');

const con=mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'ibl'
});

console.log(con);
console.log('----');
con.connect((err)=>{
	console.log(err);
console.log('----');
	console.log(con);

	con.query("select * from company, companybranch where companybranch.company=company.companyid",(err,res)=>{
		console.log(res);


	});
});
