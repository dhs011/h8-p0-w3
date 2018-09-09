function tentukanDeretGeometri(arr) {
  var int = arr.slice(-1).pop() / arr.slice(-2, -1).pop();
  var res = true;

  for (var i = 0; i <= arr.length-2; i++) {
    if (int * arr[i] !== arr[i+1]) {
      res = false;
    }
  }

  return res;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
