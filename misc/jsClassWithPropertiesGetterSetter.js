function Person() {
    var _firstName = "unknown";

    Object.defineProperties(this, {
        "FirstName": {
            get: function () {
                return _firstName;
            },
            set: function (value) {
                _firstName = value;
            }
        }
    });
};

var person1 = new Person();
person1.FirstName = "Steve";
console.log(person1.FirstName );
            
var person2 = new Person();
person2.FirstName = "Bill";
console.log(person2.FirstName );