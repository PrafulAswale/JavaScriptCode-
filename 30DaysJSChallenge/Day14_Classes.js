// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the
// greeting message.
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

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
console.log("Old age " + person1.age);
person1.updateAge(25);
console.log("New age " + person1.age);
// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.
// Create an instance of the Student class and log the student ID.
class Student extends Person {
  studentId;
  static count = 0;
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
    Student.count++;
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
// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
student1.greeting();

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating
// an instance of the class and log the message.
Student.genericGreeting();

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log
// the total number of students.
console.log(Student.count);

// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the
// full name using the getter.
// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log
// the updated full name.
class NewPerson {
  firstname;
  lastname;

  setPerson(firstName, lastName) {
    this.firstname = firstName;
    this.lastname = lastName;
  }

  getPerson() {
    return [this.firstname, this.lastname];
  }
}

let personNew = new NewPerson();

personNew.setPerson("Praful", "Aswale");
let personInfo = personNew.getPerson();
console.log(personInfo);

personNew.setPerson("Karan", "V");
personInfo = personNew.getPerson();
console.log(personInfo);
// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
// Ensure that the balance can only be updated through these methods.
class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  checkBalance() {
    return this.#balance;
  }
  withdraw(amount) {
    if (this.checkBalance() < amount) {
      console.log("You do not have sufficient balance");
      return;
    }
    console.log(
      `${amount} debited from your account. Balance: ${this.checkBalance()}`
    );
  }
}

let createAccount = new Account();

createAccount.deposit(2000);
console.log(createAccount.checkBalance());
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
Account.deposit(1320);
Account.checkBalance();
