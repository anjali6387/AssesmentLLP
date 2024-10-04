import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user/user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should find all users', async () => {
    const result = [{ id: 1, username: 'test', password: 'test123' }];
    jest.spyOn(repository, 'find').mockResolvedValue(result);

    expect(await service.findAllUsers()).toBe(result);
  });

  // Add more tests for other CRUD operations
});
