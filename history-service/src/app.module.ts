import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HistoryModule } from "./history/history.module";
import {typeOrmConfig} from "./config/typeorm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    HistoryModule
  ],
})
export class AppModule {}
