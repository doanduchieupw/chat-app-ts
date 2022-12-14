import { CreateUserDto } from './dtos/CreateUser.dto';
import { Controller, Inject, Post, Get, Body, UseGuards } from '@nestjs/common';
import { IAuthService } from './auth';
import { Routes, Services } from '../utils/constants';
import { IUserService } from '../users/users';
import { instanceToPlain } from 'class-transformer';
import { LocalAuthGuard } from './utils/Guard';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUserService,
  ) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(await this.userService.createUser(createUserDto));
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  loginUser() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
