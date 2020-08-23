function run(){
  var name = document.getElementById('n1').value;
  var middleName = document.getElementById('n2').value;
  var lastName = document.getElementById('n3').value;
  var fullName = name + ' ' + middleName + ' ' + lastName;
  document.getElementById('txt').innerHTML = fullName;
}
