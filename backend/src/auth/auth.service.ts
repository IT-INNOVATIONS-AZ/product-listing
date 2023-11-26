import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async userId(request: Request): Promise<number> {
    const token = await request.headers.authorization;
    const data = await this.jwtService.verifyAsync(token);
    const user_data = await this.userService.findOne({ email: data['email'] });

    return user_data['id'];
  }
}
