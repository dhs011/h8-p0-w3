function palindrome(kata) {
  var hasil = '';
  for (var i = kata.length-1; i >= 0; i--) {
    hasil = hasil + kata[i];
  }

  return hasil === kata ? true : false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
