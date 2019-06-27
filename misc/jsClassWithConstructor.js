function Person(FirstName, LastName, Age) {
    this.firstName = FirstName || "unknown";
    this.lastName = LastName || "unknown";
    this.age = Age || 25;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
};

var person1 = new Person("James","Bond",50);
console.log(person1.getFullName());

var person2 = new Person("Tom","Paul");
console.log(person2.getFullName());