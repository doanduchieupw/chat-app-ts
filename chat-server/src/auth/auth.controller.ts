import { CreateUserDto } from './dtos/CreateUser.dto';
import { Controller, Inject, Post, Get, Body } from '@nestjs/common';
import { IAuthService } from './auth';
import { Routes, Services } from '../utils/constants';
import { IUserService } from '../users/users';
import { instanceToPlain } from 'class-transformer';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(this.userService.createUser(createUserDto));
  }

  @Post('login')
  loginUser() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
