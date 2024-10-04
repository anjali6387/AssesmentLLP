import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';  // Import UserModule
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';  // Assuming you have JwtStrategy for authentication


@Module({
  imports: [
    UserModule,  // Import UserModule to access UserService
    JwtModule.register({
      secret: 'your_jwt_secret', // Use a secure secret here
      signOptions: { expiresIn: '1h' }, // Token expiry time
    }),
  ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
