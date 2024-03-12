import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "mysql-28fe2c48-react-app-c733.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_coXrQSfwfQUoEP-bzoA",
  database: "defaultdb",
});
