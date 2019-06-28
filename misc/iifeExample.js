/*
Immediately Invoked Function Expression: 

Advantages of IIFE:

Do not create unnecessary global variables and functions
Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
Organize JavaScript code.
Make JavaScript code maintainable.

*/

var userName = "Bill";

(function (name) {

    function display(name)
    {
        console.log("MyScript2.js: " + name);
    }

    display(name);
})(userName);