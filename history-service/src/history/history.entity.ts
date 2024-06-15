import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class History {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	userId: number;

	@Column()
	action: string;

	@Column()
	timestamp: Date;
}