//import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: "webservice.cz2a2og0qa52.us-east-2.rds.amazonaws.com",
//   // host: "https://vqvfhiwwpr.us-east-2.awsapprunner.com",
//   user: "admin",
//   password: "minimumOf12*",
//   database: "students",
// });

// export const db = mysql.createConnection({

//   // host: "localhost",
//   // user: "root",
//   // password: "password",
//   // database: "students",
// });

// export const db = mysql.createPool({
//   connectionLimit: 10,
//   host: "webservice.cz2a2og0qa52.us-east-2.rds.amazonaws.com",
//   user: "admin",
//   password: "minimumOf12*",
//   database: "students",

// });

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-2",
  // credentials: {
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  // },
});

export const ddb = DynamoDBDocumentClient.from(client);
