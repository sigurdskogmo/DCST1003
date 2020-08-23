import fs from 'fs';

let students;
let newStudent = { name: 'eksempel', email: 'eksempel@stud.ntnu.no' };

let readFromFile = () => {
  fs.readFile('src/data.json', (error, data) => {
    if (error) {
      console.error('Could not read the file');
    } else {
      console.log('Successfully read the file');
    }
    students = JSON.parse(data);

    let studentList = document.getElementById('studentList');
    for (let student of students) {
      let li = document.createElement('li');
      li.innerText = student.name + ', ' + student.email;
      studentList.append(li);
    }
  });
};

let writeToFile = () => {
  fs.readFile('src/data.json', (error, data) => {
    students = JSON.parse(data);
    students.push(newStudent);

    fs.writeFile('src/data.json', JSON.stringify(students), error => {
      if (error) {
        console.error('Could not write to file');
      } else {
        console.log('Successfully wrote to file');
      }
    });
    readFromFile();
  });
};

let deleteFromFile = email => {
  let studentToDelete = email;
  let indexToDelete;

  fs.readFile('src/data.json', (error, data) => {
    students = JSON.parse(data);
    //students.splice(students.indexOf(studentToDelete), 1);
    for (let i = 0; i < students.length; i++) {
      if (students[i].email == studentToDelete) {
        indexToDelete = i;
        break;
      } else {
        console.log('Student not at index', i);
      }
    }
    students.splice(indexToDelete, 1);

    fs.writeFile('src/data.json', JSON.stringify(students), error => {
      if (error) {
        console.error('Could not delete from file');
      } else {
        console.log('Successfully deleted from file');
      }
    });
    readFromFile();
  });
};

readFromFile();
//writeToFile();
//deleteFromFile('sigurask@stud.ntnu.no');
