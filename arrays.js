const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

const favoriteAnimal = 'cow';
const favoriteAnimalArray = favoriteAnimal.split(''); //['c', 'o', 'w']
console.log('favoriteAnimalArray', favoriteAnimalArray);

const favoriteAnimals = 'cow,dog,duck,bear';
const favoriteAnimalsArray = favoriteAnimals.split(','); //["cow", "dog", "duck", "bear"]
console.log('favoriteAnimalsArray', favoriteAnimalsArray);

const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join(''); //12345
console.log('newNum', newNum);

//mini challenge

const palChecker = (word) => {
    const wordArray = word.split ('').join('');
    const reverseArray = word.split('').reverse().join('');
    if (wordArray === reverseArray) {
    return console.log ('Yes it is a palindrome');
} else {
    console.log('No it is not a palindrome');
}};

palChecker('mom');
palChecker('dumb');
palChecker('racecar');


let animals = ['dog', 'cat', 'monkey', 'bear'];
const lastItem = animals.pop(); //bear
const firstItem = animals.shift(); //dog
animals.push('bat');
animals.unshift('baby hippo');
console.log(animals);

//for loops
// 1. What is your starting value? - usually 0
// 2. What is your stoping value? - something.length
// 3. How are you incermenting? - +1

for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

