import { Test, TestingModule } from '@nestjs/testing';
import { UsercrudController } from './usercrud.controller';
import { UsercrudService } from './usercrud.service';

describe('UsercrudController', () => {
  let controller: UsercrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsercrudController],
      providers: [UsercrudService],
    }).compile();

    controller = module.get<UsercrudController>(UsercrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
