// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// // import { UsersModule } from './users/users.module';



// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [],
//   exports:[],
// })
// export class AppModule {
//   constructor(){
//     console.log("app module")
//   }
// }
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, AuthModule],
})
export class AppModule {}

