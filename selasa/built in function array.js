function dataHandling2(params) {
  var paramName = params.slice(1, 2).toString();

  params = params.map(item => {
            if (item === paramName) {
              item = paramName.concat('Elsharawy');
            }
            if (item === params.slice(2, 3).toString()) {
              item = 'Provinsi '.concat(params.slice(2, 3).toString());
            }
            return item;
          });
  params.splice(4, 0, 'Pria', 'SMA Internasional Metro');
  params.pop();
  console.log(params)

  switch (Number(params.slice(3, 4).toString().split('/')[1])) {
    case 1: console.log('Januari'); break;
    case 2: console.log('Februari'); break;
    case 3: console.log('Maret'); break;
    case 4: console.log('April'); break;
    case 5: console.log('Mei'); break;
  }

  console.log(params.slice(3, 4).toString().split('/'));
  console.log(params.slice(3, 4).toString().split('/').join().replace(/,/g, '-'));
  console.log(paramName);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
