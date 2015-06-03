
// reverses a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// factorialize a number
function factorialize(num) {
  var fact = 1;
  for (; num > 1; num--) {
    fact *= num;
  }
  return fact;
}

// check for palindromes
function palindrome(str) {
  str = str.toLowerCase();
  
  str = str.split("");
  update = [];

  for (var i in str) {
     if (str[i].match(/[a-z]/)) {
        update.push(str[i]);
      }
  }

  reversed = update.reverse().join("");
  update = update.reverse().join("");

  if (update === reversed) {
      return true;
    }
    else {
      return false;
  }
}

// longest word in string
function findLongestWord(str) {
  a = str.split(" ");
  max = 0;
  
  for (var i in a) {
    if (a[i].length > max) {
      max = a[i].length;
    }
  }
  
  return max;
}

// title case a sentence
function titleCase(str) {
  var a = str.toLowerCase().split(" ");
  updated = [];
  
  for (var i in a) {
    updated.push(a[i][0].toUpperCase() + a[i].substring(1, a[i].length));
  }
  
  return updated.join(" ");
}

// return largest number in arrays
function largestOfFour(arr) {
  final = [];
  
  for (var i in arr) {
    var max = 0;
    for (var j in arr[i]) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    final.push(max);
  }
  // You can do this!
  return final;
}