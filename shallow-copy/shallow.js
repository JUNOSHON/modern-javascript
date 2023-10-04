const wiSoft = {
  name: "Wisoft",
  mentors: {
    professor: "park",
    bachelor: "jeon",
    master: "kim",
  },
};

const mmic = JSON.parse(JSON.stringify(wiSoft));
mmic.mentors.professor = "lee";

console.log(wiSoft.mentors.professor);
console.log(mmic.mentors.professor);
console.log(wiSoft === mmic);

