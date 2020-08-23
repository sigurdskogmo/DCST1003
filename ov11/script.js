let v = [1, 2, 3];

console.log("add 2 to each element of v:", v.map(e => e + 2));
console.log("multiply each element of v by 2:", v.map(e => e * 2));
console.log("sum of v:", v.reduce((sum, number) => sum + number, 0));
console.log(
  "mean of v:",
  v.reduce((sum, number) => sum + number, 0) / v.length
);
console.log(
  "each element of v as string:",
  v.map(element => element.toString())
);
console.log(
  "v as string:",
  v.map((v, i) => "v[" + i + "] = " + v).reduce((sum, v) => sum + v + ", ", "")
);

let students = [
  { name: "Ola", grade: "A" },
  { name: "Kari", grade: "C" },
  { name: "Knut", grade: "C" }
];

console.log(
  "students-elements as strings:",
  students.map(student => student.name + " got " + student.grade)
);
console.log(
  "Kari got:",
  students.find(student => student.name == "Kari").grade
);
console.log(
  "Did everyone get C:",
  students.every(student => student.grade == "C") == false ? "No" : "Yes"
);
console.log("How many got C:", students.filter(student => student.grade == 'C').length);
console.log("Percentage of C grades:", (students.filter(student => student.grade == 'C').length)/students.length*100)
console.log("Did anyone get A:", students.some(student => student.grade == 'A') == true ? "Yes" : "No")
console.log("Did anyone get F:", students.some(student => student.grade == 'F') == true ? "Yes" : "No")
