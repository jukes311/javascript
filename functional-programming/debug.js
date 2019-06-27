const DEBUG_MODE_ENABLED = true

var debug

if (DEBUG_MODE_ENABLED) {
  debug = printDebugMessage
} else {
  debug = doNothing
}

// ...

debug("Some debug message")

// ...

function printDebugMessage(message) {
  console.log("DEBUG: " + message)
}

function doNothing() { }
