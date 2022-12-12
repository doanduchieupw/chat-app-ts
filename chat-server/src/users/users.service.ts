import { IUserService } from './users';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDetails } from '../utils/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../utils/typeorm';
import { hashPassword } from '../utils/helpers';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserDetails) {
    const exsitingUser = await this.userRepository.findOneBy({
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
}
