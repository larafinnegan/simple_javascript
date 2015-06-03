
// reverses a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// factorialize a number
function factorialize(num) {
  var result = 1;
  for (; num > 1; num--) {
    result *= num;
  }
  return result;
}

// check for palindromes
function palindrome(str) {
  str = str.toLowerCase().split("");

  var i = str.length - 1;
  while (i >= 0) {
     if (!str[i].match(/[a-z]/)) str.splice(i, 1);
     i--;
  }

  return str.join("") === str.reverse().join("");
}

// longest word in string
function findLongestWord(str) {
  a = str.split(" ");
  max = 0;
  
  for (var i in a) {
    if (a[i].length > max) max = a[i].length;
  }
  
  return max;
}

// title case a sentence
function titleCase(str) {
  str = str.toLowerCase().split(" ");
  
  for (var i in str) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1, str[i].length);
  }
  
  return str.join(" ");
}

// return largest number in arrays
function largestOfFour(arr) {
  result = [];
  
  for (var i in arr) {
    var max = null;
    for (var j in arr[i]) {
      if (arr[i][j] > max) max = arr[i][j];
    }
    result.push(max);
  }
  return result;
}