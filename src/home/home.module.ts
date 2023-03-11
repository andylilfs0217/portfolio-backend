import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { Module } from '@nestjs/common';
import { Home } from 'src/models/home.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
