import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

export class CreateProfileDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  contactNumber: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  user: ObjectId;
}
