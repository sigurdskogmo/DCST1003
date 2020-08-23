import mysql from 'mysql';

import { connection } from './mysql_connection';
let studentList = document.getElementById('studentList');

let insertStudent = (name, email) => {
  connection.query('INSERT INTO Students (name, email) VALUES (?, ?)', [name, email], (error, results) => {
    console.log(results.insertId);
  });
  readFromDatabase();
};

let deleteStudent = email => {
  connection.query('DELETE FROM Students WHERE email = ?', email);
  readFromDatabase();
};

/*let updateStudent = (name, email, newName, newEmail) => {
  connection.query('UPDATE Students SET email=?');
};

connection.query('UPDATE Students SET email=? WHERE id=?', ['ola@verdal.no', 2], (error, results) => {
  if (error) return console.error(error.message);
  console.log(results.affectedRows);
});*/

// connection.query('SELECT * FROM Students WHERE id=2', (error, results) => {})

let readFromDatabase = () => {
  connection.query('SELECT * FROM Students', (error, results) => {
    console.log('Query finished');
    for (let student of results) {
      console.log(student.id, student.name, student.email);
    }

    for (let student of results) {
      let li = document.createElement('li');
      li.innerText = student.name;
      studentList.appendChild(li);
    }
  });
};

readFromDatabase();
//insertStudent('Sigurd', 'sigurask@stud.ntnu.no');
//deleteStudent('sigurask@stud.ntnu.no');
