// src/auth/dto/register.dto.ts
import {IsNotEmpty, IsString,MinLength } from 'class-validator'
export class RegisterDto {

     @IsString()
     @IsNotEmpty()
    username: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;
  }
  