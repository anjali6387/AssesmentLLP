import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;
    const newUser = this.userRepository.create({ username, password });
    return this.userRepository.save(newUser);
  }

 async findAllUsers(): Promise<UserDto[]> {
  const users = await this.userRepository.find();
  return users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  }

  async updateUser(id: string, createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save({ ...createUserDto, id: Number(id) });
  }

 async deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id).then(() => {});
  }

 
}
