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
import { Todo, TodoDto } from 'src/models/todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodo(
    @Query('take') take = 30,
    @Query('skip') skip = 0,
    @Query('order') order: any = { checked_at: 'asc', created_at: 'asc' },
  ): Promise<PaginationResponse<Todo>> {
    const res = await this.todoService.getAllTodo(take, skip, order);
    return res;
  }

  @Get(':id')
  async getTodo(@Param('id') id: number): Promise<Todo> {
    const res = await this.todoService.getTodo(id);
    return res;
  }

  @Post()
  async addTodo(@Body() body: any): Promise<Todo> {
    const todoDto: TodoDto = { ...body };
    todoDto.checked_at = body.isChecked ? new Date() : null;
    const res = await this.todoService.addTodo(todoDto);
    return res;
  }

  @Put(':id')
  async updateTodo(@Param('id') id: number, @Body() body: any): Promise<Todo> {
    const todoDto = { ...body };
    todoDto.checked_at = body.isChecked ? new Date() : null;
    delete todoDto.isChecked;
    const res = await this.todoService.updateTodo(id, todoDto);
    return res;
  }

  @Delete(':id')
  async removeTodo(@Param('id') id: number): Promise<any> {
    const res = await this.todoService.removeTodo(id);
    return res;
  }
}
