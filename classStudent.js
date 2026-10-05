// JavaScript code​​​​​‌​​​​​‌‌​​​‌​​​​​‌‌​‌​​​‌​ below
// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;

const roster = [
    {
        name: 'Anwar',
        grades: [97, 87, 99],
    },
    {
        name: 'Sophie',
        grades: [75, 22, 85],
    },
    {
        name: 'Ron',
        grades: [64, 77, 90],
    },
];
const teacher = 'Harriet';

/* A student is passing if their GPA is > 70 */
function calculateGPA(grades) {
    return Math.floor(
        grades.reduce((currSum, currValue) => currSum + currValue) /
            grades.length,
    );
}

class Student {
    constructor(name, grades) {
        if (grades.some((grade) => grade < 0 || grade > 100)) {
            return;
        }

        this.name = name;
        this.grades = grades;
    }

    getGrades() {
        return this.grades;
    }

    checkIsPassing() {
        const result = calculateGPA(this.grades);

        if (result >= 70) {
            return {
                data: true,
                message: `${this.name} Passou`,
            };
        }
    }
}

const student = new Student('Valeria', [15, 51, 2]);
console.log(student);
console.log(student.getGrades());
console.log(student.checkIsPassing());
console.log(calculateGPA(student.grades));

console.log(roster[1]);
console.log(calculateGPA(roster[1].grades));

class CourseRoster {
    constructor(roster, teacher) {
        this.roster = roster.map(
            (student) => new Student(student.name, student.grades),
        );
        this.teacher = teacher;
    }

    getRoster() {
        const studentsName = this.roster
            .map((roster) => roster.name)
            .join(', ');

        return studentsName;
    }

    returnGraduatingStudents() {
        return this.roster.filter((student) => student.checkIsPassing());
    }
}

const courseRoster = new CourseRoster(roster, teacher);

console.log(courseRoster.getRoster());
console.log(courseRoster.returnGraduatingStudents());
console.log(courseRoster);

const studentArray = roster.map(
    (student) => new Student(student.name, student.grades),
);
const result = new CourseRoster([...studentArray], teacher);
