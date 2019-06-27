function callWith2Arguments(arg1, arg2, func) {
    return func(arg1, arg2)
  }
  
  console.log(callWith2Arguments(1, 2, add))
  console.log(callWith2Arguments(9, 4, subtract))
  
  var result = callWith2Arguments(2, 4, function(x, y) {
    return x * x + y * y
  })

  console.log(result)
  
  function add(x, y) {
    return x + y
  }
  
  function subtract(x, y) {
    return x - y
  }
  