import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    try {
      const decodedToken = this.jwtService.verify(token);
      request.user = decodedToken;
      return true;
    } catch (err) {
      // Handle the error
      if (err.name === 'TokenExpiredError') {
        throw new HttpException('NOT_AUTHORIZED', HttpStatus.UNAUTHORIZED);
      } else {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }
    }
  }
}
