import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>
	) {}

	async resetProblemsFlag(): Promise<number> {
		const result = await this.userRepository
			.createQueryBuilder()
			.update(User)
			.set({ problems: false })
			.where('problems = :problems', { problems: true })
			.execute();
		return result.affected;
	}
}
