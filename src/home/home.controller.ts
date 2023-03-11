import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PaginationResponse } from 'src/common/helper/pagination.helper';
import { Home, HomeDto } from 'src/models/home.entity';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  async getAllHomes(
    @Query('take') take = 30,
    @Query('skip') skip = 0,
    @Query('order')
    order: any = { session: 'asc', header1: 'asc', created_at: 'asc' },
  ): Promise<PaginationResponse<Home>> {
    const res = await this.homeService.getAllHomes(take, skip, order);
    return res;
  }

  @Get(':id')
  async getHome(@Param('id') id: number): Promise<Home> {
    const res = await this.homeService.getHome(id);
    return res;
  }

  @Post()
  async addHome(@Body() body: any): Promise<Home> {
    const todoDto: HomeDto = { ...body };
    const res = await this.homeService.addHome(todoDto);
    return res;
  }

  @Put(':id')
  async updateHome(@Param('id') id: number, @Body() body: any): Promise<Home> {
    const todoDto = { ...body };
    const res = await this.homeService.updateHome(id, todoDto);
    return res;
  }

  @Delete(':id')
  async removeHome(@Param('id') id: number): Promise<any> {
    const res = await this.homeService.removeHome(id);
    return res;
  }
}
