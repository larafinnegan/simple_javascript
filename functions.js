
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
  str = str.split(" ");
  max = 0;
  
  for (var i in a) {
    if (str[i].length > max) max = str[i].length;
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

// match end of string
function end(str, target) {
  return str.substring(str.length - target.length, str.length) === target;
}

// repeat a string
function repeat(str, num) {
    orig = str;
  if (num <= 0) return "";
  for (var i = 1; i < num; i++) {
    str += orig;
}
  return str;
}

// truncate string
function truncate(str, num) {
    return str.length <= num ? str : str.substring(0, num - 3) + "...";
}

// chunk arrays
function chunk(arr, size) {
  new_arr = [];
  
  for (i = 0; i <= arr.length - size; i += size) {
      new_arr.push(arr.slice(i, size + i));
  }
  
  if (arr.length % size) {
	new_arr.push(arr.slice(arr.length - (arr.length % size), arr.length));
	}
    return new_arr;
}

// slice arrays
function slasher(arr, howMany) {
    return howMany >= arr.length ? [] : arr.slice(howMany, arr.length);
}

// array comparison
function mutation(arr) {
    input1 = arr[0].toLowerCase().split("");
    input2 = arr[1].toLowerCase().split("");

    
    for (var i in input2) {
        var idx = input1.indexOf(input2[i]);
        if (idx === (-1) || input1 === []) {
            return false;
        }
        else {
            input1.splice(idx, 1);
        }
    }
    return true;
}

// remove false elements from array
function bouncer(arr) {
  var i = arr.length;
  
  while (i >= 0) {
      if (!arr[i]) arr.splice(i, 1);
      i--;
  }
  return arr;
}
