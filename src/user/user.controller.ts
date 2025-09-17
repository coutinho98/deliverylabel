import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
@UsePipes(new ValidationPipe())
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() 
  create(@Body() createUserDto: any) {
    return this.userService.create(createUserDto);
  }
 
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}