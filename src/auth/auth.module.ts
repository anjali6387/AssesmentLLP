import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module'; 
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; 


@Module({
  imports: [
    UserModule,  
    JwtModule.register({
      secret: 'your_jwt_secret', 
      signOptions: { expiresIn: '3d' }, 
    }),
  ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
