import { Controller, Get, Query } from "@nestjs/common";
import { HistoryService } from "./history.service";
import { GetHistoryFilterDto } from "./dto/get-history-filter.dto";
import { History } from "./history.entity";

@Controller()
export class HistoryController {
	constructor(private historyService: HistoryService) {}

	@Get()
	getHistory(@Query() filterDto: GetHistoryFilterDto): Promise<History[]> {
		return this.historyService.getHistory(filterDto);
	}
}