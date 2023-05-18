const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const task = input.value.trim();
	if (task.length > 0) {
		const li = document.createElement('li');
		li.textContent = task;
		const button = document.createElement('button');
		button.textContent = 'Delete';
		button.addEventListener('click', function() {
			ul.removeChild(li);
		});
		li.appendChild(button);
		ul.appendChild(li);
		input.value = '';
	}
});
