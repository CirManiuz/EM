module.exports = {
	development: {
		client: 'postgresql',
		connection: {
			host: 'localhost',
			user: 'postgres',
			password: 'ZXCVB1010',
			port: 5432,
			database: 'user_service_db'
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './migrations'
		},
		seeds: {
			directory: './seeds'
		}
	}
};