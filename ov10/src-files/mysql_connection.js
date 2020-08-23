import mysql from 'mysql';

// Setup MySQL-server connection
export let connection = mysql.createConnection({
  host: 'mysql-ait.stud.idi.ntnu.no',
  user: 'username', // Replace "username" with your username
  password: 'password', // Replace "password" with your password
  database: 'username' // Replace "username" with your username
});

// Connect to MySQL-server
connection.connect(error => {
  if (error) return console.error(error); // If error, show error in console (in red text) and return
});
