// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';  // Define a payload interface if needed
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret', // Use your JWT secret here
    });
  }

  async validate(payload: JwtPayload) {
    const { username } = payload;
    const user = await this.userService.findUserByUsername(username);

    if (!user) {
      throw new Error('Unauthorized');
    }

    return user;  // Attach the validated user to the request
  }
}
