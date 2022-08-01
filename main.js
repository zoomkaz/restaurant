let btn = document.querySelector('.sign-in');
let header = document.querySelector('.header');


btn.addEventListener('click', function() {
	let login = prompt('Введите логин:');

	if (login === 'SECRET') {
		alert('Добро пожаловать.')
		header.style.background = 'whitesmoke';
		document.body.style.background = 'white'
	}
	else {
		alert('Нет доступа.')
		header.style.background = 'red';
		document.body.style.background = 'gray'
	}
});