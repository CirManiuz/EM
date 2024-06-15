exports.up = function (knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary();
		table.string('first_name');
		table.string('last_name');
		table.integer('age');
		table.string('gender');
		table.boolean('problems');
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};