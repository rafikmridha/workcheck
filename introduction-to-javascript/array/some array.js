//array index,length,position
var playersNames = ['arif', 'rafik', 'safik', 'hamid'];
var elements = playersNames[0];
console.log(elements)
var playersAge = [25, 23, 15, 30];
var positionIndex = playersAge.indexOf(25);
console.log(positionIndex);

console.log(playersNames, playersAge.length);
console.log(playersAge, playersNames.length);

//index added,push,pop

var playersAge = [35, 45, 40, 50];
playersAge.pop()
console.log(playersAge)
playersAge.push(75); 
console.log(playersAge);
var elements = playersAge[0];
console.log(elements);
playersAge[0] = 60;

console.log(playersAge);
console.log(playersAge.length);

var playersNames = ['akther', 'farok', 'joni', 'sohid'];
console.log(playersNames);

playersNames.pop()
console.log(playersNames);
playersNames.push('al-amin');
console.log(playersNames)
var elements = playersNames[3];
console.log(elements)
var positionIndex = playersNames.indexOf('farok')
console.log(positionIndex)

console.log(playersNames,playersAge.length)



