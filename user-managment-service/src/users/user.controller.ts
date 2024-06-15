import { Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
	constructor(
		private userService: UserService
	){}

	@Post('reset-problems')
	async resetProblemsFlag() {
		const affectedRows = await this.userService.resetProblemsFlag();
		return { affectedRows };
	}
}