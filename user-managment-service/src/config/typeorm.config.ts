import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'ZXCVB1010',
	database: 'user_service_db',
	entities: [User],
	synchronize: true,
};