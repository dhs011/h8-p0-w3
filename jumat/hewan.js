function groupAnimals(animals) {
    var resultArr = [ [] ];
    var a = 0;

    animals.sort() // sorting dulu
    resultArr[0].push(animals[0])

    for(var i = 1 ; i < animals.length ; i++){
        if(animals[i][0] === resultArr[a][0][0]){
            resultArr[a].push(animals[i])
        }else{
            a++;
            resultArr[a] = [animals[i]]
        }
    }
    return resultArr
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
