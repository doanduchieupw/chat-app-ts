import { Inject, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { ValidateUserDetails } from './../utils/types';
import { Services } from './../utils/constants';
import { IAuthService } from './auth';
import { IUserService } from '../users/users';
import { comparePassword } from '../utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUserService,
  ) {}

  async validateUser(userDetails: ValidateUserDetails) {
    const user = await this.userService.findUser({ email: userDetails.email });
    if (!user)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    const isPasswordValid = comparePassword(
      userDetails.password,
      user.password,
    );
    return isPasswordValid ? user : null;
  }
}
