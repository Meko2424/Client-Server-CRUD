import mysql from "mysql";

export const db = mysql.createConnection({
  // host: "localhost",
  host: "webservice.cwls0k0o8hni.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "minimumOf12*",
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
