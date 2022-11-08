//Kata 3 - Vowels

const numberOfVowels = function(data) {
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case "a":
        counter++;
        break;
      case "e":
        counter++;
        break;
      case "i":
        counter++;
        break;
      case "o":
        counter++;
        break;
      case "u":
        counter++;
        break;
    }
  }
return counter;
};
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

//https://gist.github.com/eegyudt/52f40932d1004052620376ea7fe53c8a