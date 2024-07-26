//Activity 1
//Task 1:
class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("Welcome " + this.name);
  }

  updateAge(age) {
    this.age = age;
  }
}

let person1 = new Person("Praful", 24);

person1.greeting();

// Task 2
console.log("Old age " + person1.age);
person1.updateAge(25);
console.log("New age " + person1.age);

// Activity 2
// Task 3
class Student extends Person {
  studentId;
  static count;
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
    this.count += 1;
  }

  getStudentId() {
    return this.studentId;
  }
  greeting() {
    console.log(this.studentId, this.name);
  }
  static genericGreeting() {
    console.log("Hello there");
  }
}

let student1 = new Student("Praful", Math.floor(Math.random() * 10000));

let student1Id = student1.getStudentId() + " " + student1.name;
console.log(student1Id);

// Task 4
student1.greeting();

Student.genericGreeting();

console.log(Student.count);
