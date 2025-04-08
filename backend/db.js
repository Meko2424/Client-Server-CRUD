import mysql from "mysql";

export const db = mysql.createConnection({
  // host: "localhost",
  host: "webservice.cz2a2og0qa52.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "minimumOf12*",
  port: "3306",
  // port: "8800",
  // user: "root",
  // password: "password",
  database: "students",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database!");
});
