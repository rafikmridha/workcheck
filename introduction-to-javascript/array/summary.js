var destinations = ['sajek', 'bali', 'nepal', 'cox bajar'];
console.log(destinations)
console.log(destinations.length);
var elements = destinations[0];
console.log(elements);
destinations[1] = 'bhutan';
console.log(destinations);

destinations.pop()
console.log(destinations);
destinations .push ('saint martin')
console.log(destinations)

if (destinations[0] == 'sajek') {
    console.log('ami sajek jabo');
}
else if (destinations[1] == 'bali ') {
    console.log('ami bali jabo')
}
else {
    console.log('ami saint martin jabo')
}