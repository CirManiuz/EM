import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./users/user.module";
import { typeOrmConfig } from "./config/typeorm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
  ],
})
export class AppModule {}
