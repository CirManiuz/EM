import { IsNotEmpty, IsInt, Min } from 'class-validator';

export class GetHistoryFilterDto {
	@IsNotEmpty()
	userId?: number;

	@IsInt()
	@Min(1)
	page?: number;

	@IsInt()
	@Min(1)
	limit?: number;
}