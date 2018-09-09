function dataHandling(params) {
  var res = '';
  for (var i = 0; i < params.length; i++) {
    for (var j = 0; j < params[i].length; j++) {
      switch (j) {
        case 0:
          res = res + 'Nomor ID: ' + params[i][j];
          break;
        case 1:
          res = res + '\nNama Lengkap: ' + params[i][j];
          break;
        case 2:
          res = res + '\nTTL: ' + params[i].slice(2, 3) + ' ' + params[i].slice(3, 4);
          break;
        case 3:
          res = res + '\nHobi: ' + params[i].slice(4, 5) + '\n\n';
          break;
      }
    }
  }

  return res;
}



var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));
