import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(24)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(24)
  lastName: string;

  @IsNotEmpty()
  @MaxLength(32)
  password: string;
}
