import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormConfig from './ormconfig';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(ormConfig), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
