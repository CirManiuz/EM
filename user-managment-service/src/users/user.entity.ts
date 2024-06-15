import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable: true})
	firstName?: string;

	@Column({nullable: true})
	lastName?: string;

	@Column({nullable: true})
	age?: number;

	@Column({nullable: true})
	gender?: string;

	@Column({default: false})
	problems: boolean;
}