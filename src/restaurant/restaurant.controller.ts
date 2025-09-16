import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() data: { name: string; logoUrl?: string }) {
    return this.restaurantService.create(data);
  }

  @Get()
  async findAll() {
    return this.restaurantService.findAll();
  }
}