import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../utils/helpers';
import { User } from '../utils/typeorm';
import { CreateUserDetails, FindUserParams } from '../utils/types';
import { IUserService } from './users';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserDetails) {
    const exsitingUser = await this.userRepository.findOne({
      email: userDetails.email,
    });
    if (exsitingUser) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }
    const hashedPassword = await hashPassword(userDetails.password);
    const newUser = this.userRepository.create({
      ...userDetails,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }
  findUser(findUserParams: FindUserParams): Promise<User> {
    return this.userRepository.findOne(findUserParams);
  }
}
