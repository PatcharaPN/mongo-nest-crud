import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsercrudModule } from './usercrud/usercrud.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://patcharapn:1234@cluster0.3tswjdg.mongodb.net/usercrud',
    ),
    UsercrudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
