var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

function Students() {
  return (numberOfStudents / total) * 100;
}

function Mentors() {
  return (numberOfMentors / total) * 100;
}

var StudentP = Students();
var MentorP = Mentors();

function result() {
  console.log("Percentage Students : " + Math.round(StudentP) + "%");
  console.log("Percentage Mentors  : " + Math.round(MentorP) + "%");
}

var message = result();
console.log(message);
