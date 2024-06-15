import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { History } from "../history/history.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'ZXCVB1010',
	database: 'history_service_db',
	entities: [History],
	synchronize: true,
};