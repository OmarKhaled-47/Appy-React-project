import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "mysql-28fe2c48-react-app-c733.a.aivencloud.com",
  user: "avnadmin",
  port: 18388,
  password: "AVNS_coXrQSfwfQUoEP-bzoA",
  database: "defaultdb",
});
// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   port: 3306,
//   password: "1010419/",
//   database: "social",
// });
