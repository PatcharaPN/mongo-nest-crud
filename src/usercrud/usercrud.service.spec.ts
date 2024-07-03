import { Test, TestingModule } from '@nestjs/testing';
import { UsercrudService } from './usercrud.service';

describe('UsercrudService', () => {
  let service: UsercrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsercrudService],
    }).compile();

    service = module.get<UsercrudService>(UsercrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
