const fetch = require('node-fetch');

const foo = async () => {
	try {
		const wrongUri = 'https://wrong.url';

		const response = await fetch(wrongUri);
		const data = await response.json();
		console.log(data);
	} catch(err) {
		console.error(err);
	}
};

foo();