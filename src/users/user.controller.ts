import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { Public } from 'src/common/decorators/public.decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('upsert')
  async upsert(@Body() body: any) {
    return this.usersService.upsertUser(body);
  }
}
