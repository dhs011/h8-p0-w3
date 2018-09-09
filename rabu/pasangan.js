function pasanganTerbesar(num) {
  var arr = [];
  var res = 0;
  for (var i = 0; i <= num.toString().length-1; i++) {
    arr.push(num.toString()[i] + num.toString()[i+1]);
  }

  res =  arr.reduce(function(x,y) {
    return (x > y) ? x : y;
  });

  return Number(res);
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
