const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ibl",
});

conn.connect();

function execute_query(sql)
{
  return new Promise((resolve, reject) =>
  {
    conn.query(
      sql,
      (err, res) =>
      {
        if(err) reject(err);
        else resolve(res);
      },
      (fields) => console.log(fields)
    );
  });
}

async function get_data()
{
  let list= await execute_query("select companyid,name from company");
  let list2=await execute_query("select * from freightstatus");
  console.table(list);
  console.table(list2);
  conn.end();
}


get_data();
