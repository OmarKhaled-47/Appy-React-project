import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "onlinehost",
  user: "avnadmin",
  password: "AVNS_coXrQSfwfQUoEP-bzoA",
  database: "defaultdb",
});
