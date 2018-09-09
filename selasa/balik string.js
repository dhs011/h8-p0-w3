function balikString(str) {
  var hasil = '';
  for (var i = str.length - 1; i >= 0; i--) {
    hasil = hasil + str[i];
  }

  return hasil;
}


console.log(balikString('hello world!'));
