const myForm = document.getElementById('generate-names');

myForm.addEventListener('submit', loadNames);

function loadNames(e) {
	e.preventDefault();

	//get values
	const country = document.getElementById('country').value,
		sex = document.getElementById('genre').value,
		quantity = document.getElementById('quantity').value;

	//build the url
	let nameUrl = `http://uinames.com/api/?`;

	//append country
	if (country !== '') {
		nameUrl += `region=${country}&`;
	}

	//append sex
	if (sex !== '') {
		nameUrl += `gender=${sex}&`;
	}

	//append quantity
	if (quantity !== '') {
		nameUrl += `amount=${quantity}&`;
	}

	//fetch api

	fetch(nameUrl)
		.then((response) => {
			return response.json();
		})
		.then((names) => {
			let myUiElement = `<h1>Generated Names</h1>`;

			myUiElement += `<ul class="list">`;

			names.forEach((userData) => {
				myUiElement += `<li>${userData.name}</li>`;
			});
			myUiElement += `</ul>`;

			document.querySelector('#result').innerHTML = myUiElement;
		})
		.catch((err) => {
			console.log(err);
		});
}
