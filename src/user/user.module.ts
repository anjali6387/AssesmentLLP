import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';  // Your User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Export if needed in other modules
})
export class UserModule {}
