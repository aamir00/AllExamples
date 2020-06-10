// function expression to select elements

const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list ').classList.add('active');
	console.log(selectElement('.nav-list ').classList);
});

selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list ').classList.remove('active');
});
