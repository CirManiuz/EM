import {Injectable, OnModuleInit} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { History } from "./history.entity";
import * as amqp from 'amqplib';
import {GetHistoryFilterDto} from "./dto/get-history-filter.dto";

@Injectable()
export class HistoryService implements OnModuleInit {
	constructor(
		@InjectRepository(History)
		private historyRepository: Repository<History>,
 	) {}

	async onModuleInit() {
		await this.receiveMessage();
	}

	async getHistory(filterDto: GetHistoryFilterDto): Promise<History[]> {
		return this.historyRepository.find({
			where: { userId: filterDto.userId },
			skip: (filterDto.page - 1) * filterDto.limit,
			take: filterDto.limit,
		});
	}

	async logAction(userId: number, action: string): Promise<History> {
		console.log(userId, action);
		const history = this.historyRepository.create({ userId, action, timestamp: new Date() });
		await this.historyRepository.save(history);
		return history;
	}

	async receiveMessage() {
		try {
			const conn = await amqp.connect('amqp://localhost');
			const channel = await conn.createChannel();
			const queue = 'user_actions';

			await channel.assertQueue(queue, { durable: false });
			await channel.consume(queue, async msg => {
				if (msg !== null) {
					const message = JSON.parse(msg.content.toString());
					console.log(`Received message: ${message.action} for user ${message.userId}`)
					await this.logAction(message.userId, message.action)
					channel.ack(msg);
				}
			})
		} catch (error) {
			console.error('Error receiving message:', error)
		}
	}
}
