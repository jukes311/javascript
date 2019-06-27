// object literal 
var person = {
    firstName:'Steve',
    lastName:'Jobs'
  };
  
  // Constructor function
  function Student(){
    this.name = "John";
    this.gender = "Male";
    this.sayHi = function(){
      console.log('Hi');
    }
  }
  var student1 = new Student();
  console.log(student1.name);
  console.log(student1.gender);
  student1.sayHi();

  console.log(person.firstName);