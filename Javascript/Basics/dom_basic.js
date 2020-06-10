const form = document.getElementById('my-form');
console.log(form);

const form2 = document.querySelector('#my-form'); // similar to jquery

console.log(document.querySelectorAll('.item'));

document.getElementsByClassName('item'); //

/*
    Manipulating DOM
*/

const ul = document.querySelector('.items');
// ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'hmmm';

/*
    Changing CSS or styles
*/

const btun = document.querySelector('.btn');
btun.style.background = 'red';
console.log(btun);

/* 
    Events
*/

const btun2 = document.querySelector('.btn');
btun2.addEventListener('click', function(e) {
	e.preventDefault();
	console.log(e);
	// document.querySelector('#my-form').classList.add('bg-dark'); // to add the CSS class
});
