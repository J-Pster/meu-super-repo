const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userWithJobInfo = {
  ...user,
  ...jobInfos,
};

const printWelcome = ({name, age, nationality, profession, squadInitials, squad}) => {
  console.log(`"Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}"`)
}

printWelcome(userWithJobInfo);