import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  // port: "8800",
  user: "root",
  password: "password",
  database: "students",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
    return;
  }
  console.log("Connected to MySQL database!");
});
