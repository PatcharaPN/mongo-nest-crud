import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserRequest } from './dto/create-usercrud.dto';
import { UpdateUsercrudDto } from './dto/update-usercrud.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsercrudService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async create(createUsercrudDto: CreateUserRequest): Promise<UserDocument> {
    try {
      const result = await new this.userModel(createUsercrudDto).save();
      return result;
    } catch (error) {
      throw new BadRequestException('Failed to create user');
    }
  }

  async findAll(): Promise<UserDocument[]> {
    try {
      const findedAllUser = await this.userModel.find();
      return findedAllUser;
    } catch (error) {
      throw new BadRequestException('Failed to fetch user');
    }
  }

  async findOne(userId: string): Promise<UserDocument> {
    if (!Types.ObjectId.isValid(userId)) {
      throw new BadRequestException(`Invalid user ID: ${userId}`);
    }
    try {
      const findOneUser = await this.userModel.findById(userId);
      if (!findOneUser) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      return findOneUser;
    } catch (error) {
      throw new BadRequestException('Failed to find user');
    }
  }

  async update(userId: string, updateUsercrudDto: UpdateUsercrudDto) {
    if (!Types.ObjectId.isValid(userId)) {
      throw new BadRequestException(`Invalid user ID: ${userId}`);
    }
    try {
      const UpdateUser = await this.userModel.findByIdAndUpdate(
        userId,
        updateUsercrudDto,
        { new: true },
      );
      if (!UpdateUser) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      return UpdateUser;
    } catch (error) {
      throw new BadRequestException('Failed to update user');
    }
  }

  async remove(userId: string) {
    if (!Types.ObjectId.isValid(userId)) {
      throw new BadRequestException(`Invalid user ID: ${userId}`);
    }
    try {
      const deleteUser = await this.userModel.findByIdAndDelete(userId);
      if (!deleteUser) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      return deleteUser;
    } catch (error) {
      throw new BadRequestException('Failed to delete user');
    }
  }
}
