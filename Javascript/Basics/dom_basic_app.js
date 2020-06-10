const form = document.querySelector('#my-form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const msg = document.querySelector('.msg');
const usersEle = document.getElementById('users');

var onFormSubmit = function(e) {
	e.preventDefault();

	if (inputName.value == '' || inputEmail.value == '') {
		msg.innerHTML = 'Please enter Email and Name';
		msg.classList.add('error');

		setTimeout(() => {
			msg.remove();
		}, 1000);
	} else {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(`User ${inputName.value} has been created`));
		usersEle.appendChild(li);
	}
};

form.addEventListener('submit', onFormSubmit);
