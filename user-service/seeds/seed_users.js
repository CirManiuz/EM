exports.seed = async function(knex) {
	const users = [];
	const chunkSize = 1000;
	for (let i = 0; i < 1500000; i++) {
		users.push({
			first_name: `First${i}`,
			last_name: `Last${i}`,
			age: Math.floor(Math.random()* 100),
			gender: Math.random() > 0.5 ? 'male' : 'female',
			problems: Math.random() > 0.5,
		});
		if (users.length === chunkSize) {
			await knex('users').insert(users);
			users.length = 0;
		}
	}
	
	if (users.length > 0) {
		await knex.insert(users);
	}
	return 0;
};