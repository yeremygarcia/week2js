// Create constructor function
class Person {
  constructor(
    firstName,
    lastName,
    favoriteColor,
    favoriteNumber,
    favoriteFoods
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
  }
  // Add function called fullName that returns first and last name properties concatenated together
  fullName() {
    return `This person's full name is ${this.firstName} ${this.lastName}`;
  }
  // Overwrite the toString method by creating a toString method for person
  toString() {
    return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
  }
}
//  Adding a property called family to Person object
Person.prototype.family = [];

Person.prototype.addToFamily = function (members) {
  if (members instanceof Person && !this.family.includes(members)) {
    this.family.push(members);
  }

  return this.family.length;
};

let peter = new Person("Peter", "Oleary", "Green", 42, ["pasta", "pizza"]);
let Bjorn = new Person("Bjorn", "Oleary", "Orange", 43, ["pizza, fries"]);
let John = new Person("John", "Oleary", "Red", 44, ["potatoes", "ramen"]);
let Sean = new Person("Sean", "Oleary", "Red", 45, ["potatoes", "ramen"]);
console.log(peter.fullName());
console.log(peter.toString());

console.log(peter.addToFamily(Bjorn));
console.log(peter.addToFamily(John));
console.log(peter.addToFamily(Bjorn));
console.log(peter.addToFamily(Sean));
console.log(peter.family);

console.log(peter instanceof Person);
console.log(Bjorn instanceof Person);
console.log(John instanceof Person);
console.log(Sean instanceof Person);
