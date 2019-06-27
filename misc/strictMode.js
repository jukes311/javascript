/*
The strict mode in JavaScript does not allow following things:

Use of undefined variables
Use of reserved keywords as variable or function name
Duplicate properties of an object
Duplicate parameters of function
Assign values to read-only properties
Modifying arguments object
Octal numeric literals
with statement
eval function to create a variable
*/

"use strict";

var x = 1; // valid in strict mode
y = 1; // invalid in strict mode