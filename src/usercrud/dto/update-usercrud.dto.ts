import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRequest } from './create-usercrud.dto';

export class UpdateUsercrudDto extends PartialType(CreateUserRequest) {}
