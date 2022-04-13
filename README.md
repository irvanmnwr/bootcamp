# bootcamp

https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

const mysql = require("mysql2");

const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "tickitz",
});

connection.connect((error) => {
if (error) {
throw error;
}
// eslint-disable-next-line no-console
console.log("You're now connected db mysql ...");
});
