import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.RestaurantCreateInput) {
    return this.prisma.restaurant.create({ data });
  }

  async findAll() {
    return this.prisma.restaurant.findMany();
  }
}