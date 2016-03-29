import answer from './answer';
import Person from './person';
import Developer from './developer';

let john = new Person('John Resig', 32);
let doug = new Developer('Douglas Crockford', 61, 'JavaScript');

let people = {
	john,
	doug,
	'john-doe': new Person('John Doe', 80)
};

// Switch cases, fall through and indenting
switch (doug.language) {
	case 'JavaScript':
		// falls through
	case 'Processing':
		john.party();
		break;
	default:
		john.bummer();
}

// Arrow functions
setTimeout(() => {
	people.doug.loves();
}, 500);

document.body.addEventListener('click', e => {
	e.currentTarget.innerText = answer;
});

// Rest params and spread operator
function greet(say, ...users) {
	users.forEach(u => say + u.name);
}

greet('Hi ', john, doug);

let numbers = [1, 5, 8, 3, 2, 7];

Math.max(...numbers);