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



class Customer  //Entity class
{
     constructor(id,company,first_name,last_name)
     {
         this.id=id;
         this.company=company;
         this.first_name=first_name;
         this.last_name=last_name;
     }
}


class CustomerDB   // Repository class - CRUD - Create Retrieve Update Delete
{
    static add_customer(customer)
    {
        let values=[customer.id,customer.company,customer.first_name,customer.last_name];
        conn.query('insert into customers(id,company,first_name,last_name) values (?,?,?,?)',
        values,
        (err,res)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(res);
            }
        });
    }

    static update_customer(customer)
    {
        let values=[customer.company,customer.first_name,customer.last_name,customer.id];
        conn.query('update customers set company=?, first_name=?, last_name=? where id=?',
        values,
        (err,res)=>{console.log(err,res)});
    }

    static delete_customer(customer)
    {
        this.delete_customer_by_id(customer.id);
    }

    static delete_customer_by_id(customerid)
    {
        conn.query('delete from customers where id=?',[customerid],(err,res)=>{console.log(err,res)});
    }

    static get_customer_by_id(customerid,callback)
    {
        conn.query('select * from customers where id=?',[customerid],
        (err,res)=>{
            if(err) callback(null);
            else callback(res);
        });
    }
    static get_all_customers(callback)
    {
        conn.query('select * from customers',
        (err,res)=>{
            if(err) callback(null);
            else callback(res);
        });
    }
}

let c=new Customer(100,'My New Company','Paresh','Kinage');
// CustomerDB.add_customer(c);

// CustomerDB.update_customer(c);

// CustomerDB.delete_customer_by_id(100);

// CustomerDB.get_customer_by_id(129,(customer)=>{
//     console.log(customer);
// });

CustomerDB.get_all_customers((customers)=>{
    for(let c of customers)
    {
        console.log(c.id,c.first_name);
    }
});