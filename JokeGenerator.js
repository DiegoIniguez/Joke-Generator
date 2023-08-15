var number; //First and last response
var number2; //Second response

//Generate random numbers
function getRandom() {
    number = Math.floor(Math.random() * 10) + 1;
    number2 = Math.floor(Math.random() * 10) + 1;
}

//First response
function jokeCreate(x) {
    if(x > 0 && x < 3)
    {
        return '— Interrupting cow.'
    } else if (x >= 3 && x < 5) {
        return '— You.'
    } else if (x > 5 && x < 8) {
        return '— Hatch.'
    } else if(x === 5) {
        return '— Spell'
    } else {
        return '— Avenue'
    }
}

//Second response
function jokePunchline(x) {
    if(x > 0 && x < 3)
    {
        return 'Yoo-hoo! Anybody home?'
    } else if (x >= 3 && x < 5) {
        return 'Radio not, here I come!'
    } else if (x > 5 && x < 8) {
        return 'ICE CREAM SO YOU CAN HEAR ME!?'
    } else if(x ===5) {
        return 'Weirdo you think you’re going?'
    } else {
        return 'Canoe come out now?'
    }
}

//Third response
function jokeEnd(x) {
    if(x > 0 && x < 3)
    {
        return 'I know it was not that funny.'
    } else if (x >= 3 && x < 5) {
        return 'I really tried, you know?.'
    } else if (x > 5 && x < 8) {
        return 'My humor is unappreciated.'
    } else if(x === 5) {
        return 'I am sorry, I do not know anything about jokes.'
    } else {
        return 'It was funnier in my head.'
    }
}

console.log(`— Knock knock!`);
console.log(`— Who's there?`);

getRandom();

console.log(jokeCreate(number))
console.log(`— Who's that?`);
getRandom();
console.log(`— ${jokePunchline(number2)} ${jokeEnd(number)}`);