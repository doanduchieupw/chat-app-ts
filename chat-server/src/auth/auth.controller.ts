import { CreateUserDto } from './dtos/CreateUser.dto';
import {
  Controller,
  Inject,
  Post,
  Get,
  Body,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { IAuthService } from './auth';
import { Routes, Services } from '../utils/constants';
import { IUserService } from '../users/users';
import { instanceToPlain } from 'class-transformer';
import { LocalAuthGuard, AuthenticatedGuard } from './utils/Guard';
import { Request, Response } from 'express';

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
  loginUser(@Res() res: Response) {
    return res.send(HttpStatus.OK);
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@Req() req: Request, @Res() res: Response) {
    const user = req.user;
    res.send(user);
  }

  @Post('logout')
  logout() {}
}
