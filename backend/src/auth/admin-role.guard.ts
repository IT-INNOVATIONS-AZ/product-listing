import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Roles } from '../app.roles';
import { UserService } from '../user/user.service';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private userService: UserService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (request?.user) {
      const { id } = request.user;
      const user = await this.userService.findOne(id, { relations: ['role'] });
      return user.role === Roles.ADMIN;
    }

    return false;
  }
}
