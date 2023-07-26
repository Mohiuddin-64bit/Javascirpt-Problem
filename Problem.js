// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(string) {
  let strLen = string.length;
  let revStr = ''
  for(let i = strLen-1; i >= 0; i--){
    revStr += string[i]
  }
  console.log(revStr)
}

reverseString("Mohiuddin")