//Kata 5 - Percent Encoded String
/*There are two solutions in this file, the first one is commented out.

/*
const urlEncode = function(text) {
  let i = 0;
  let newText = "";
  newText = newText + text[i];
  for (i = 1; i<text.length-1; i++) {
    if (text[i] === " ") {
        newText = newText + "%20";
    }
    else {
      newText = newText+ text[i];
    }
  }
  newText = newText + text[i];
  return newText;  
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/
/*
The first version of the solution above followed the assingment description but the output differs as the space before the string in the second example is not printed on the expected output screen. Accoding to the assignment: "If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string. 
My first solution left the leading and trailing spaces in the strings as per instruction, so the output is different from the expected output. 

The second solution removes these white spaces to match the expected output of the assignemnt.
*/



const urlEncode = function(text) {
  let i = 0;
  let newText = "";

  if (text[i] === " ") {
    newText = "";
  }
  else {
    newText = newText + text[i];
  }

  for (i = 1; i < text.length-1; i++) {
    if (text[i] === " ") {
        newText = newText + "%20";
    }
    else {
      newText = newText + text[i];
    }
  }
  newText = newText + text[i];
  return newText;  
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

//https://gist.github.com/eegyudt/e44f598a1ec0e19d655923802dcca14c
