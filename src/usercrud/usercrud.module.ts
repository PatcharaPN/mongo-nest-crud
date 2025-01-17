import { Module } from '@nestjs/common';
import { UsercrudService } from './usercrud.service';
import { UsercrudController } from './usercrud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsercrudController],
  providers: [UsercrudService],
})
export class UsercrudModule {}
