import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationResponse } from 'src/common/helper/pagination.helper';
import { Todo, TodoDto } from 'src/models/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private tradesRepository: Repository<Todo>,
  ) {}

  async getAllTodo(
    take: number,
    skip: number,
    order: any,
  ): Promise<PaginationResponse<Todo>> {
    const todos = await this.tradesRepository.findAndCount({
      order: order,
      take,
      skip,
    });
    return new PaginationResponse<Todo>(todos, skip, take);
  }

  async getTodo(id: number): Promise<Todo> {
    const todo = await this.tradesRepository.findOneBy({ id });
    return todo;
  }

  async addTodo(body: TodoDto): Promise<Todo> {
    const todo = await this.tradesRepository.save(body);
    return todo;
  }

  async updateTodo(id: number, body: TodoDto): Promise<any> {
    const res = await this.tradesRepository.update(id, body);
    return res;
  }

  async removeTodo(id: number): Promise<any> {
    const res = await this.tradesRepository.softDelete(id);
    return res;
  }
}
