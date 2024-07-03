import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsercrudService } from './usercrud.service';
import { CreateUserRequest } from './dto/create-usercrud.dto';
import { UpdateUsercrudDto } from './dto/update-usercrud.dto';

@Controller('usercrud')
export class UsercrudController {
  constructor(private readonly usercrudService: UsercrudService) {}

  @Post()
  create(@Body() createUsercrudDto: CreateUserRequest) {
    return this.usercrudService.create(createUsercrudDto);
  }

  @Get()
  findAll() {
    return this.usercrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usercrudService.findOne(id);
  }

  @Put(':userId')
  update(
    @Param('userId') userId: string,
    @Body() updateUsercrudDto: UpdateUsercrudDto,
  ) {
    return this.usercrudService.update(userId, updateUsercrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usercrudService.remove(id);
  }
}
