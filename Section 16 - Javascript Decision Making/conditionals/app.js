/*
let random = Math.random();
if (random < 0.5) {
    console.log('Your number is less than 0.5!!')
    console.log(random);
} else if (random > 0.5) {
    console.log('Your number is greater than 0.5!!')
    console.log(random);
} */

const dayOfWeek = prompt('Enter a day').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log('Ugh, monday!');
} else if (dayOfWeek === 'saturday') {
    console.log('Yeah, I love saturdays!');
} else if (dayOfWeek === 'friday') {
    console.log('Fridays are decent, especially after work!');
} else {
    console.log("Meh")
}

/*
const age = 8;

if (age < 5) {
    console.log('You are a baby. You get in for free!');
} else if (age < 10) {
    console.log('You are a child. You pay $10');
} else if (age < 65) {
    console.log('You are and adult. You pay $20');
}
*/