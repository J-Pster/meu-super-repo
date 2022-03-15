const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const calcAverage = (grades) => (grades.reduce((acc, val) => acc + val) / grades.length);

function studentAverage(students, grades) {
  return students.map((student, index) => ({
    name: student,
    average: calcAverage(grades[index]),
  }));
}

console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];