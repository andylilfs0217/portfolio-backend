import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationResponse } from 'src/common/helper/pagination.helper';
import { Home, HomeDto } from 'src/models/home.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  async getAllHomes(
    take: number,
    skip: number,
    order: any,
  ): Promise<PaginationResponse<Home>> {
    const entries = await this.homeRepository.findAndCount({
      order: order,
      take,
      skip,
    });
    return new PaginationResponse<Home>(entries, skip, take);
  }

  async getHome(id: number): Promise<Home> {
    const todo = await this.homeRepository.findOneBy({ id });
    return todo;
  }

  async addHome(body: HomeDto): Promise<Home> {
    const todo = await this.homeRepository.save(body);
    return todo;
  }

  async updateHome(id: number, body: HomeDto): Promise<any> {
    const res = await this.homeRepository.update(id, body);
    return res;
  }

  async removeHome(id: number): Promise<any> {
    const res = await this.homeRepository.softDelete(id);
    return res;
  }
}
