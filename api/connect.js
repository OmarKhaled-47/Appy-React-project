import mysql from "mysql";

export const db = mysql.createConnection({
  host: "mysql-28fe2c48-react-app-c733.a.aivencloud.com",
  user: "avnadmin",
  port: 18388,
  password: "AVNS_coXrQSfwfQUoEP-bzoA",
  database: "defaultdb",
});
